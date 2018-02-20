import { withFilter } from 'graphql-subscriptions';
import { createBatchResolver } from 'graphql-resolve-batch';

const COMPONENT_SUBSCRIPTION = 'component_subscription';
const COMPONENTS_SUBSCRIPTION = 'components_subscription';
const PROP_SUBSCRIPTION = 'prop_subscription';

export default pubsub => ({
  Query: {
    async components(obj, { limit, after }, context) {
      let edgesArray = [];
      let components = await context.Component.componentsPagination(limit, after);

      components.map(component => {
        edgesArray.push({
          cursor: component.id,
          node: {
            id: component.id,
            name: component.name,
            description: component.description,
            technology: component.technology,
            provider: component.provider
          }
        });
      });

      const endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;

      const values = await Promise.all([context.Component.getTotal(), context.Component.getNextPageFlag(endCursor)]);
      return {
        totalCount: values[0].count,
        edges: edgesArray,
        pageInfo: {
          endCursor: endCursor,
          hasNextPage: values[1].count > 0
        }
      };
    },
    component(obj, { id }, context) {
      return context.Component.component(id);
    }
  },
  Component: {
    props: createBatchResolver((sources, args, context) => {
      return context.Component.getPropsForComponentIds(sources.map(({ id }) => id));
    })
  },
  Mutation: {
    async addComponent(obj, { input }, context) {
      const [id] = await context.Component.addComponent(input);
      const component = await context.Component.component(id);
      // publish for component list
      pubsub.publish(COMPONENTS_SUBSCRIPTION, {
        componentsUpdated: {
          mutation: 'CREATED',
          id,
          node: component
        }
      });
      return component;
    },
    async deleteComponent(obj, { id }, context) {
      const component = await context.Component.component(id);
      const isDeleted = await context.Component.deleteComponent(id);
      if (isDeleted) {
        // publish for component list
        pubsub.publish(COMPONENTS_SUBSCRIPTION, {
          componentsUpdated: {
            mutation: 'DELETED',
            id,
            node: component
          }
        });
        return { id: component.id };
      } else {
        return { id: null };
      }
    },
    async editComponent(obj, { input }, context) {
      await context.Component.editComponent(input);
      const component = await context.Component.component(input.id);
      // publish for component list
      pubsub.publish(COMPONENTS_SUBSCRIPTION, {
        componentsUpdated: {
          mutation: 'UPDATED',
          id: component.id,
          node: component
        }
      });
      // publish for edit component page
      pubsub.publish(COMPONENT_SUBSCRIPTION, { componentUpdated: component });
      return component;
    },
    async addProp(obj, { input }, context) {
      const [id] = await context.Component.addProp(input);
      const prop = await context.Component.getProp(id);
      // publish for edit component page
      pubsub.publish(PROP_SUBSCRIPTION, {
        propUpdated: {
          mutation: 'CREATED',
          id: prop.id,
          componentId: input.componentId,
          node: prop
        }
      });
      return prop;
    },
    async deleteProp(obj, { input: { id, componentId } }, context) {
      await context.Component.deleteProp(id);
      // publish for edit component page
      pubsub.publish(PROP_SUBSCRIPTION, {
        propUpdated: {
          mutation: 'DELETED',
          id,
          componentId,
          node: null
        }
      });
      return { id };
    },
    async editProp(obj, { input }, context) {
      await context.Component.editProp(input);
      const prop = await context.Component.getProp(input.id);

      // publish for edit component page
      pubsub.publish(PROP_SUBSCRIPTION, {
        propUpdated: {
          mutation: 'UPDATED',
          id: input.id,
          componentId: input.componentId,
          node: prop
        }
      });
      return prop;
    }
  },
  Subscription: {
    componentUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(COMPONENT_SUBSCRIPTION),
        (payload, variables) => {
          return payload.componentUpdated.id === variables.id;
        }
      )
    },
    componentsUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(COMPONENTS_SUBSCRIPTION),
        (payload, variables) => {
          return variables.endCursor <= payload.componentsUpdated.id;
        }
      )
    },
    propUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(PROP_SUBSCRIPTION),
        (payload, variables) => {
          return payload.propUpdated.componentId === variables.componentId;
        }
      )
    }
  }
});
