'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblTypeModelPorsche extends Model {
    static get table() { return 'tbl_type_model_porsche' }

    static get primaryKey() { return 'id_type_model' }

    static get foreignKey() { return 'id_model' }

    static get visible() { 
        return ['id_type_model', 'id_model', 'type_model']
    }

    static scopeActive(query) {
        return query.where({status: '1'})
    }

    model() {
        return this.belongsTo('App/Models/TblModelPorsche', 'id_model', 'id_model')
    }
}

module.exports = TblTypeModelPorsche
