const express = require("express");
const FilmeController = require("./controllers/FilmeController");
const PersonagemController = require("./controllers/PersonagemController");
// const CenarioController = require("./controllers/CenarioController");

const routes = express.Router();

routes.get("/filmes", FilmeController.index);
routes.post("/filmes", FilmeController.store);

routes.get("/:id_filme/personagens", PersonagemController.GetAll);
routes.post("/:id_filme/personagens", PersonagemController.Add);
routes.put("/personagens/:id_personagem", PersonagemController.Update);
routes.delete("/personagens/:id_personagem", PersonagemController.Delete);

module.exports = routes;
