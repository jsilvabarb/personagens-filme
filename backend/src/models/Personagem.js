const { Model, DataTypes } = require("sequelize");

class Personagem extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                
                nome: DataTypes.STRING,
                descricao: DataTypes.STRING,
                imagem: DataTypes.STRING,
            }, 
            {
                sequelize
            }
        );
    }
    static associate(models){
       this.belongsTo(models.Filme, { foreignKey: "id_filme", as: "filme" });
       this.belongsTo(models.Cenario, { foreignKey: "id_personagem", as: "personagem" });
    }
}
module.exports = Personagem;