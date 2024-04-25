"use strict";
const { HORARIO_TABLE, HorarioSchema} = require('../models/horariosModel')
const { CLIENTE_TABLE, ClienteSchema} = require('../models/clienteModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(HORARIO_TABLE, HorarioSchema);
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(HORARIO_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
  },
};