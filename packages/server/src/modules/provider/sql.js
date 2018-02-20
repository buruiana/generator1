import { orderedFor } from '../../sql/helpers';
import knex from '../../sql/connector';

export default class Provider {
  providersPagination(limit, after) {
    let where = '';
    if (after > 0) {
      where = `id < ${after}`;
    }

    return knex
      .select('id', 'name', 'path')
      .from('provider')
      .whereRaw(where)
      .orderBy('id', 'desc')
      .limit(limit);
  }

  getTotal() {
    return knex('provider')
      .countDistinct('id as count')
      .first();
  }

  getNextPageFlag(id) {
    return knex('provider')
      .countDistinct('id as count')
      .where('id', '<', id)
      .first();
  }

  provider(id) {
    return knex
      .select('id', 'name', 'path')
      .from('provider')
      .where('id', '=', id)
      .first();
  }

  addProvider({ name, path }) {
    return knex('provider')
      .insert({ name, path })
      .returning('id');
  }

  deleteProvider(id) {
    return knex('provider')
      .where('id', '=', id)
      .del();
  }

  editProvider({ id, name, path }) {
    return knex('provider')
      .where('id', '=', id)
      .update({
        name: name,
        path: path
      });
  }
}
