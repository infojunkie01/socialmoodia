const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follow extends Model {}

Follow.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    follow_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'follow'
  }
);

module.exports = Follow;
