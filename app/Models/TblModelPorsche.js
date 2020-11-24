'use strict'

const _ = require('lodash')
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

    typeModels() {
        return this.hasMany('App/Models/TblTypeModelPorsche', 'id_model', 'id_model')
    }

    static boot() {
        super.boot()

        this.addHook('beforeCreate', async(data) => {
            data.model_name = await _.upperFirst(data.model_name)
        })
    }
}

module.exports = TblModelPorsche
