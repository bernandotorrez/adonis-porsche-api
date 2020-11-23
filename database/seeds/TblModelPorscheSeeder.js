'use strict'

/*
|--------------------------------------------------------------------------
| TblModelPorscheSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TblModelPorscheSeeder {
  async run () {
    const TblModelPorsche = await Factory.model('App/Models/TblModelPorsche').createMany(5)
  }
}

module.exports = TblModelPorscheSeeder
