const { Model, DataTypes } = require("sequelize");

class Filme extends Model 
{
    static init(sequelize) 
    {
        super.init(
            {
                nome: DataTypes.STRING,
                descricao: DataTypes.STRING,
                poster: DataTypes.STRING,
            }, 
            {
                sequelize
            }
        );
    }
    static associate(models){
        this.hasMany(models.Personagem,  { foreignKey: "id_filme", as: "personagem" });
    }
}

module.exports = Filme;