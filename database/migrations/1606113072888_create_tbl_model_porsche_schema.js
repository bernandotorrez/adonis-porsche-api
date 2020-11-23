'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblModelPorscheSchema extends Schema {
  up () {
    this.create('tbl_model_porsche', (table) => {
      table.increments('id_model')
      table.string('model_name', 100).notNullable()
      table.enu('status', [0, 1]).notNullable().defaultTo(1)
      table.timestamps()
    })

    this.raw("INSERT INTO tbl_model_porsche (model_name) VALUES ('911')")
  }

  down () {
    this.drop('tbl_model_porsche')
  }
}

module.exports = CreateTblModelPorscheSchema
