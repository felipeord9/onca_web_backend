"use strict";
const { EMPLEADOS_TABLE, EmpleadoSchema} = require('../models/empleadoModel')
const { CLIENTE_TABLE, ClienteSchema} = require('../models/clienteModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
    await queryInterface.createTable(EMPLEADOS_TABLE, EmpleadoSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(EMPLEADOS_TABLE);
  },
};
