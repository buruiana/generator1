/*eslint-disable no-unused-vars*/
export default pubsub => ({
  Query: {
    async componentsWithProps(obj, { limit, after }, context) {
      let edgesArray = [];
      let componentsWithProps = await context.Editor.componentsWithProps(limit, after);

      componentsWithProps.map(component => {
        edgesArray.push({
          cursor: component.propId,
          componentId: component.id,
          componentName: component.name,
          componentDescription: component.description,
          componentTechnology: component.technology,
          componentProvider: component.provider,
          propId: component.propId,
          propName: component.propName,
          propDescription: component.propDescription,
          propType: component.propType
        });
      });

      const endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;
      const values = await Promise.all([context.Editor.getTotal(), context.Editor.getNextPageFlag(endCursor)]);

      return {
        totalCount: values[0].count,
        edges: edgesArray,
        pageInfo: {
          endCursor: endCursor,
          hasNextPage: values[1].count > 0
        }
      };
    },
    async mySQLTable(obj, { database, table }, context) {
      let edgesArray = [];
      let mySQLTable = await context.Editor.mySQLTable(database, table);

      mySQLTable.map(table => {
        edgesArray.push({
          table_name: table.table_name,
          column_name: table.column_name,
          ordinal_position: table.ordinal_position,
          is_nullable: table.is_nullable,
          data_type: table.data_type,
          column_key: table.column_key,
          column_type: table.column_type,
          column_comment: table.column_comment
        });
      });

      return {
        edges: edgesArray
      };
    }
  },
  Mutation: {},
  Subscription: {}
});
