"use strict";
const { USER_TABLE, UserSchema} = require('../models/userModel')
const { EMPLEADOS_TABLE, EmpleadoSchema} = require('../models/empleadoModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(EMPLEADOS_TABLE, EmpleadoSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(EMPLEADOS_TABLE);
  },
};
