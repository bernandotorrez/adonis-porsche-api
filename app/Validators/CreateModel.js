'use strict'

class CreateModel {
  get rules () {
    return {
      model_name: 'required|min:3|max:100'
    }
  }

  async fails (errorMessages) {
    const { message, field, validation } = errorMessages[0]
    return this.ctx.response.badRequest({
      httpStatus: 400,
      message: 'error_validation',
      total: 0,
      data: message
    })
  }
}

module.exports = CreateModel
