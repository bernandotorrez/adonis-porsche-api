'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    api: {
      v1: {
        RouteList: {
          Model: [{
              url: 'api/v1/model',
              method: 'GET',
              desc: 'Get All Data Model'
            },
            {
              url: 'api/v1/model/get/:id',
              method: 'GET',
              desc: 'Get One Data Model'
            },
            {
              url: 'api/v1/model/create',
              method: 'POST',
              desc: 'Create Model'
            },
            {
              url: 'api/v1/model/edit/:id',
              method: 'PATCH',
              desc: 'Update Model By ID'
            },
            {
              url: 'api/v1/model/delete/:id',
              method: 'DELETE',
              desc: 'Delete Model By ID'
            },
          ]
        }
      },
      v2: {
        RouteList: {
          Model: [{
              url: 'api/v2/model',
              method: 'GET',
              desc: 'Get All Data Model'
            },
            {
              url: 'api/v2/model/get/:id',
              method: 'GET',
              desc: 'Get One Data Model'
            },
          ]
        }
      }
    }
  }
})

Route.group(() => {

  /**
   * Model Porsche Route
   */
  Route.get('/model', 'TblModelController.index')
  Route.get('/model/get/:id', 'TblModelController.getOne')
  Route.post('/model/create', 'TblModelController.create').validator('CreateModel')
  Route.patch('/model/edit/:id', 'TblModelController.edit').validator('CreateModel')
  Route.delete('/model/delete/:id', 'TblModelController.delete')

}).prefix('api/v1')
