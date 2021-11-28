/* eslint-disable linebreak-style */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable( "personagems",
      {
        // eslint-disable-next-line linebreak-style
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        }, 
        id_filme: {
          type: Sequelize.INTEGER,
          references: { model: "filmes", key: "id"},
          allowNull:false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },       
        nome: {
          type: Sequelize.STRING,
        },
        descricao: {
          type: Sequelize.STRING,
        },
        imagem: {
          type: Sequelize.STRING,
        },
        
      },
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("personagems");
  }
};