"use strict";
const { EMPLEADOS_TABLE, EmpleadoSchema} = require('../models/empleadoModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLEADOS_TABLE, EmpleadoSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADOS_TABLE);
  },
};
