const Filme = require("../models/Filme");

module.exports = {

    
    async  GetAll(req, res)
    {
        const filmes = await Filme.findAll();

        res.json(filmes);
    },
    async Add(req, res) 
    {    
    //    Pegando informações do corpo da requisição
        const 
        { 
            nome,
            descricao,
            poster,
            
        } = req.body;
    // Insert na tabela Filmes
        const filme = await Filme.create(
            {
                nome,
                descricao,
                poster
            }
        );

        return res.json(filme);
    }
};