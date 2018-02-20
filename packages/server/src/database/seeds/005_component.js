import { truncateTables } from '../../sql/helpers';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['component', 'prop']);

  await Promise.all(
    [...Array(20).keys()].map(async ii => {
      const component = await knex('component')
        .returning('id')
        .insert({
          name: `Component name ${ii + 1}`,
          description: `Component description ${ii + 1}`,
          technology: `${ii + 1}`,
          provider: `Component provider ${ii + 1}`
        });

      await Promise.all(
        [...Array(2).keys()].map(async jj => {
          return knex('prop')
            .returning('id')
            .insert({
              component_id: component[0],
              name: `Prop name ${jj + 1} for component ${component[0]}`,
              description: `Prop description ${jj + 1} for component ${component[0]}`,
              type: `Prop type ${jj + 1} for component ${component[0]}`
            });
        })
      );
    })
  );
}
