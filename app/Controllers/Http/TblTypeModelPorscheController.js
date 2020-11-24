'use strict'

const _ = require('lodash')
const TblTypeModelPorsche = use('App/Models/TblTypeModelPorsche')

class TblTypeModelPorscheController {
    async index({response}) {
        const data = await TblTypeModelPorsche.query().with('model').active().fetch()
        const count = data.rows.length

        if(count >= 1) {
            return response.ok({
                httpStatus: 200,
                message: 'success',
                total: count,
                data: data
            })
        } else {
            return response.ok({
                httpStatus: 200,
                message: 'no_data',
                total: 0,
                data: []
            })
        }
    }
}

module.exports = TblTypeModelPorscheController
