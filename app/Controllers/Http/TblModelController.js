'use strict'

const TblModelPorsche = use('App/Models/TblModelPorsche')

class TblModelController {
    async index({ response }) {
        const data = await TblModelPorsche.query().active().fetch()
        const count = data.rows.length

        if(count >= 1) {
            return response.ok({
                httpStatus: 200,
                message: 'success',
                count: count,
                data: data
            })
        } else {
            return response.ok({
                httpStatus: 200,
                message: 'empty',
                count: 0,
                data: []
            })
        } 
    }

    async getOne({ params, response }) {
        const { id } = params
        const data = await TblModelPorsche.query().where({id_model: id}).active().first()

        if(data) {
            return response.ok({
                httpStatus: 200,
                message: 'success',
                count: 1,
                data: data
            })
        } else {
            return response.ok({
                httpStatus: 200,
                message: 'empty',
                count: 0,
                data: []
            })
        } 
    }

    async create({ request, response }) {
        const { model_name } = request.post()
        const find = await TblModelPorsche.query().where({model_name: model_name}).active().first()

        if(find) {
            return response.ok({
                httpStatus: 200,
                message: 'exist',
                count: 0,
                data: find
            })
        } else {
            const create = await TblModelPorsche.create(request.post())

            if(create) {
                return response.ok({
                    httpStatus: 200,
                    message: 'success',
                    count: 1,
                    data: create
                })
            } else {
                return response.ok({
                    httpStatus: 200,
                    message: 'failed',
                    count: 1,
                    data: []
                })
            }
        }
    }

    async edit({ request, params, response }) {
        const { id } = params
        const find = await TblModelPorsche.query().where({id_model: id}).active().first()
        
        if(!find) {
            return response.ok({
                httpStatus: 404,
                message: 'not_found',
                count: 0,
                data: []
            })
        } else {
            const update = await TblModelPorsche.query().where({id_model: id}).active().update(request.post())

            if(update) {
                return response.ok({
                    httpStatus: 200,
                    message: 'success',
                    count: 1,
                    data: id
                })
            } else {
                return response.ok({
                    httpStatus: 200,
                    message: 'failed',
                    count: 0,
                    data: []
                })
            }
        }
    }

    async delete({ params, response }) {
        const { id } = params
        const find = await TblModelPorsche.query().where({id_model: id}).active().first()

        if(!find) {
            return response.ok({
                httpStatus: 404,
                message: 'not_found',
                count: 0,
                data: []
            })
        } else {
            const destroy = await TblModelPorsche.query().where({id_model: id}).active().delete()

            if(destroy) {
                return response.ok({
                    httpStatus: 200,
                    message: 'success',
                    count: 1,
                    data: id
                })
            } else {
                return response.ok({
                    httpStatus: 200,
                    message: 'failed',
                    count: 0,
                    data: []
                })
            }
        }
    }
}

module.exports = TblModelController
