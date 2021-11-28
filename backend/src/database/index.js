// Conexão com o banco de dados
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Personagem = require("../models/Personagem");
const Filme = require("../models/Filme");
const Cenario = require("../models/Cenario");


const connection = new Sequelize(dbConfig);

Personagem.init(connection);
Filme.init(connection);
Cenario.init(connection);

module.exports = connection;