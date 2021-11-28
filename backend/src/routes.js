const express = require("express");
const FilmeController = require("./controllers/FilmeController");
const PersonagemController = require("./controllers/PersonagemController");
const CenarioController = require("./controllers/CenarioController");

const routes = express.Router();

// Create e Post de filmes na tabela filmes
routes.get("/filmes", FilmeController.GetAll);
routes.post("/filmes", FilmeController.Add);

// CRUD Personagens
routes.get("/:id_filme/personagens", PersonagemController.GetAll);
routes.post("/:id_filme/personagens", PersonagemController.Add);
routes.put("/personagens/:id_personagem", PersonagemController.Update);
routes.delete("/personagens/:id_personagem", PersonagemController.Delete);

// Create, Post e Update, tabela cenarios
routes.get("/:id_personagem/cenario", CenarioController.Get);
routes.post("/addcenario/:id_personagem", CenarioController.Add);
routes.put("/:id_personagem/cenario", CenarioController.Update);

module.exports = routes;
