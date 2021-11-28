const { Model, DataTypes } = require("sequelize");

class Cenario extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                imagem: DataTypes.STRING,
            }, 
            {
                sequelize
            }
        );
    }
    // Relacionamento 
    static associate(models){
        this.hasMany(models.Personagem,  { foreignKey: "id_personagem", as: "personagem" });
    }
}

module.exports = Cenario;