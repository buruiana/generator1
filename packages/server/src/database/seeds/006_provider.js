import { truncateTables } from '../../sql/helpers';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['provider']);

  await Promise.all(
    [...Array(3).keys()].map(async ii => {
      await knex('provider')
        .returning('id')
        .insert({
          name: `Provider name ${ii + 1}`,
          path: `Provider path ${ii + 1}`
        });
    })
  );
}
