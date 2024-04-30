"use strict";
const { SUSCRIPCION_TABLE, SuscripcionSchema} = require('../models/suscripcionModel')
const { CLIENTE_TABLE, ClienteSchema} = require('../models/clienteModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(SUSCRIPCION_TABLE, SuscripcionSchema);
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(SUSCRIPCION_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
  },
};
