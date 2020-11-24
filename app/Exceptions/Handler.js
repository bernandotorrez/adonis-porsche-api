'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response }) {
    if(error.code == 'ER_NO_REFERENCED_ROW_2') {
      return response.ok({
        httpStatus: 500,
        message: 'error_creating_updating_data',
        total: 0,
        data: 'Given Foreign Key value is not Exists'
      })
    } else if(error.code == 'E_ROUTE_NOT_FOUND') {
      return response.notFound({
        httpStatus: 404,
        message: 'route_not_found',
        total: 0,
        data: 'Oops, Page that you\'re looking is not Found'
      })
    } else {
      return response.internalServerError({
        httpStatus: 500,
        message: 'on_error',
        total: 0,
        data: error.message
      })
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
