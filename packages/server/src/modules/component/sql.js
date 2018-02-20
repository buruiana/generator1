import { orderedFor } from '../../sql/helpers';
import knex from '../../sql/connector';

export default class Component {
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
        'provider.name as provider'
      )
      .select()
      .from('component')
      .innerJoin('provider', 'component.provider', 'provider.id')
      .whereRaw(where)
      .orderBy('component.id', 'desc')
      .limit(limit);
  }

  async getPropsForComponentIds(componentIds) {
    const res = await knex
      .select('id', 'name', 'description', 'type', 'component_id AS componentId')
      .from('prop')
      .whereIn('component_id', componentIds);

    return orderedFor(res, componentIds, 'componentId', false);
  }

  getTotal() {
    return knex('component')
      .countDistinct('id as count')
      .first();
  }

  getNextPageFlag(id) {
    return knex('component')
      .countDistinct('id as count')
      .where('id', '<', id)
      .first();
  }

  component(id) {
    return knex
      .column(
        'component.id',
        'component.name',
        'component.description',
        'component.technology',
        'provider.name as provider'
      )
      .select()
      .from('component')
      .innerJoin('provider', 'component.provider', 'provider.id')
      .where('component.id', '=', id)
      .first();
  }

  addComponent({ name, description, technology, provider }) {
    return knex('component')
      .insert({ name, description, technology, provider })
      .returning('id');
  }

  deleteComponent(id) {
    return knex('component')
      .where('id', '=', id)
      .del();
  }

  editComponent({ id, name, description, technology, provider }) {
    return knex('component')
      .where('id', '=', id)
      .update({
        name: name,
        description: description,
        technology: technology,
        provider: provider
      });
  }

  addProp({ name, description, type, componentId }) {
    return knex('prop')
      .insert({ name, description, type, component_id: componentId })
      .returning('id');
  }

  getProp(id) {
    return knex
      .select('id', 'name', 'description', 'type')
      .from('prop')
      .where('id', '=', id)
      .first();
  }

  deleteProp(id) {
    return knex('prop')
      .where('id', '=', id)
      .del();
  }

  editProp({ id, name, description, type }) {
    return knex('prop')
      .where('id', '=', id)
      .update({
        name: name,
        description: description,
        type: type
      });
  }
}
