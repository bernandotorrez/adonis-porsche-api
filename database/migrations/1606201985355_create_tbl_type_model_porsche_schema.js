'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblTypeModelPorscheSchema extends Schema {
  up () {
    this.create('tbl_type_model_porsche', (table) => {
      table.increments('id_type_model')
      table.integer('id_model').unsigned().notNullable()
      table.string('type_model_name', 100).notNullable()
      table.enu('status', [0, 1]).notNullable().defaultTo(1)
      table.timestamps()

      //table.foreign('id_model').references('id_model').inTable('tbl_model')
    })

    this.raw("INSERT INTO tbl_type_model_porsche (id_model, type_model_name) VALUES ('1', '911 Cabrio')")
  }

  down () {
    this.drop('tbl_type_model_porsche')
  }
}

module.exports = CreateTblTypeModelPorscheSchema
