const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}


Food.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
=======
        type: DataTypes.STRING,
        allowNull: false,
      },
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    },
    {
      sequelize,
      modelName: 'food'
    }
)

module.exports = Food