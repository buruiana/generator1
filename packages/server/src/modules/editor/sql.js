/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Editor {
  componentsPagination(limit, after) {
    let where = '';
    if (after > 0) {
      where = `component.id < ${after}`;
    }

    return knex
      .column(
        'component.id',
        'component.name',
        'component.description',
        'component.technology',
        'provider.name as provider',
        'prop.id as propId',
        'prop.name as propName',
        'prop.description as propDescription',
        'prop.type as propType'
      )
      .select()
      .from('component')
      .innerJoin('provider', 'component.provider', 'provider.id')
      .innerJoin('prop', 'component.id', 'prop.component_id')
      .whereRaw(where)
      .orderBy('component.id', 'desc')
      .limit(limit);
  }

  getTotal() {
    return knex('prop')
      .countDistinct('id as count')
      .first();
  }

  getNextPageFlag(id) {
    return knex('prop')
      .countDistinct('id as count')
      .where('id', '<', id)
      .first();
  }

  componentsWithProps(limit, after) {
    return knex
      .column(
        'component.id',
        'component.name',
        'component.description',
        'component.technology',
        'provider.name as provider',
        'prop.id as propId',
        'prop.name as propName',
        'prop.description as propDescription',
        'prop.type as propType'
      )
      .select()
      .from('component')
      .innerJoin('provider', 'component.provider', 'provider.id')
      .innerJoin('prop', 'component.id', 'prop.component_id');
  }
}
