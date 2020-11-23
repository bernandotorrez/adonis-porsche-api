'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblModelPorsche extends Model {
    static get table() { return 'tbl_model_porsche' }

    static get primaryKey() { return 'id_model' }

    static scopeActive(query) {
        return query.where({ status: '1' })
    }

    static get visible() {
        return ['id_model', 'model_name']
    }
}

module.exports = TblModelPorsche
