'use strict'

const _ = require('lodash')
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
        const find = await TblModelPorsche.query().where({model_name: _.upperFirst(model_name)}).active().first()

        if(find) {
            return response.ok({
                httpStatus: 200,
                message: 'exist',
                count: 1,
                data: find.model_name
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
        const { model_name } = request.post()
        const find = await TblModelPorsche.query().where({id_model: id}).active().first()
        request.post().model_name = _.upperFirst(model_name)
        
        if(!find) {
            return response.ok({
                httpStatus: 404,
                message: 'not_found',
                count: 0,
                data: []
            })
        } else {
            const duplicate = await TblModelPorsche.query().whereNot({id_model: id}).where({model_name: model_name}).first()

            if(duplicate) {
                return response.ok({
                    httpStatus: 200,
                    message: 'exist',
                    count: 1,
                    data: duplicate.model_name
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
            const destroy = await TblModelPorsche.query().where({id_model: id}).active().update({status: '0'})

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
