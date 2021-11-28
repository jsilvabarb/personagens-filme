const Filme = require("../models/Filme");

module.exports = {

    
    async  index(req, res)
    {
        const filmes = await Filme.findAll();

        res.json(filmes);
    },
    

    async store(req, res) 
    {    
       
        const 
        { 
            nome,
            descricao,
            poster,
            
        } = req.body;

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