import { withFilter } from 'graphql-subscriptions';

const PROVIDER_SUBSCRIPTION = 'provider_subscription';
const PROVIDERS_SUBSCRIPTION = 'provider_subscription';

export default pubsub => ({
  Query: {
    async providers(obj, { limit, after }, context) {
      let edgesArray = [];
      let providers = await context.Provider.providersPagination(limit, after);

      providers.map(provider => {
        edgesArray.push({
          cursor: provider.id,
          node: {
            id: provider.id,
            name: provider.name,
            path: provider.path
          }
        });
      });

      const endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;

      const values = await Promise.all([context.Provider.getTotal(), context.Provider.getNextPageFlag(endCursor)]);
      return {
        totalCount: values[0].count,
        edges: edgesArray,
        pageInfo: {
          endCursor: endCursor,
          hasNextPage: values[1].count > 0
        }
      };
    },
    provider(obj, { id }, context) {
      return context.Provider.provider(id);
    }
  },
  Mutation: {
    async addProvider(obj, { input }, context) {
      const [id] = await context.Provider.addProvider(input);
      const provider = await context.Provider.provider(id);
      // publish for component list
      pubsub.publish(PROVIDERS_SUBSCRIPTION, {
        providersUpdated: {
          mutation: 'CREATED',
          id,
          node: provider
        }
      });
      return provider;
    },
    async deleteProvider(obj, { id }, context) {
      const provider = await context.Provider.provider(id);
      const isDeleted = await context.Provider.deleteProvider(id);
      if (isDeleted) {
        // publish for component list
        pubsub.publish(PROVIDERS_SUBSCRIPTION, {
          providersUpdated: {
            mutation: 'DELETED',
            id,
            node: provider
          }
        });
        return { id: provider.id };
      } else {
        return { id: null };
      }
    },
    async editProvider(obj, { input }, context) {
      await context.Provider.editProvider(input);
      const provider = await context.Provider.provider(input.id);
      // publish for component list
      pubsub.publish(PROVIDERS_SUBSCRIPTION, {
        providersUpdated: {
          mutation: 'UPDATED',
          id: provider.id,
          node: provider
        }
      });
      // publish for edit component page
      pubsub.publish(PROVIDER_SUBSCRIPTION, { providerUpdated: provider });
      return provider;
    }
  },
  Subscription: {
    providerUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(PROVIDER_SUBSCRIPTION),
        (payload, variables) => {
          return payload.providerUpdated.id === variables.id;
        }
      )
    },
    providersUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(PROVIDERS_SUBSCRIPTION),
        (payload, variables) => {
          return variables.endCursor <= payload.providersUpdated.id;
        }
      )
    }
  }
});
