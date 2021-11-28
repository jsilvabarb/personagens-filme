const Personagem = require("../models/Personagem");
const Filme = require("../models/Filme");

module.exports = {

    
    async  GetAll(req, res)
    {
        const { id_filme } = req.params;

        // const filme = await Filme.findByPk(id_filme, {
        //     include: { association: "personagem"}
        // });

        // eslint-disable-next-line no-unused-vars
        const [personagens, metadata] = await Personagem.sequelize.query("SELECT personagems.id_filme,personagems.id, personagems.nome, personagems.imagem from personagems join filmes on personagems.id_filme = filmes.id WHERE personagems.id_filme = :sql_id_filme", 
        {
            replacements:
            {
                sql_id_filme: id_filme,
            }
        }
        );

        console.log(personagens);

        return res.json(personagens);
    },
    

    async Add(req, res) 
    {    
        const {  id_filme } = req.params;

        const {            
            nome,
            descricao,
            imagem            
        } = req.body;

    const filme = await Filme.findByPk( id_filme);
      
    if(!filme) {
        return res.status(400).json({ error: "Filme Não encontrado" });
    }

        // eslint-disable-next-line no-unused-vars
        const [ personagem, metadata ] = await Personagem.sequelize.query("INSERT INTO personagems (`id_filme`,`nome`,`descricao`,`imagem`) VALUES (:sql_id_filme, :sql_nome, :sql_descricao, :sql_imagem)", 
            {
                replacements: 
                {
                    sql_nome: nome,
                    sql_descricao: descricao,
                    sql_imagem: imagem,
                    sql_id_filme: id_filme,
                }
            }
        
        );        

        return res.json(personagem);
    },

    async Update(req, res)
    {
        const { id_personagem } = req.params;
        const {
            nome,
            descricao,
            imagem
        } = req.body;

        // eslint-disable-next-line no-unused-vars
        const [ personagemUpdate, metadata ] = await Personagem.sequelize.query("UPDATE personagems SET nome = :sql_nome, descricao = :sql_descricao, imagem = :sql_imagem WHERE id = :sql_personagem_id",
            {
                replacements: 
                {
                    sql_nome: nome,
                    sql_descricao: descricao,
                    sql_imagem: imagem,
                    sql_personagem_id:  id_personagem,
                }
            }
        );

        return res.json(personagemUpdate);
    },

    async Delete(req, res) 
    {
        const { id_personagem } = req.params;
        // eslint-disable-next-line no-unused-vars
        const [ deletePersonagem, metadata] = await Personagem.sequelize.query("DELETE FROM personagems WHERE id = :sql_id_personagem", 
            {
                replacements: 
                {
                    sql_id_personagem: id_personagem,
                }
            }
        );
        
        return res.json(deletePersonagem);
    }

};