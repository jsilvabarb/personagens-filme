/* eslint-disable linebreak-style */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable("cenarios", 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
      },
      id_personagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "personagems", key: "id"},
      },
      imagem: {
        type: Sequelize.STRING,
      },
    });
   
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cenarios");
  }
};
