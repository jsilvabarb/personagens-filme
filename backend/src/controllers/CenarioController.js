
const Cenario = require("../models/Filme");

module.exports = {

    
    async  Get(req, res)
    {
        const { id_personagem } = req.params;

        // eslint-disable-next-line no-unused-vars
        const [cenario, metadata] = await Cenario.sequelize.query("SELECT cenarios.id_personagem, cenarios.imagem from cenarios join personagems on personagems.id = cenarios.id_personagem WHERE personagems.id = :sql_id_personagem", 
        {
            replacements:
            {
                sql_id_personagem: id_personagem,
            }
        }
        );

        return res.json(cenario);
    },
    

    async Add(req, res) 
    {    
        const {  id_personagem } = req.params;

        const {            
            imagem            
        } = req.body;    

        // eslint-disable-next-line no-unused-vars
        const [ cenario, metadata ] = await Cenario.sequelize.query("INSERT INTO cenarios (`id_personagem`,`imagem`) VALUES (:sql_id_personagem, :sql_imagem)", 
            {
                replacements: 
                {
                   
                    sql_imagem: imagem,
                    sql_id_personagem: id_personagem,
                }
            }
        
        );   

        return res.json(cenario);
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
        const [ personagemUpdate, metadata ] = await Cenario.sequelize.query("UPDATE personagems SET nome = :sql_nome, descricao = :sql_descricao, imagem = :sql_imagem WHERE id = :sql_personagem_id",
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

   

};