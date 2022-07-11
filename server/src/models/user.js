const { Model } = require('sequelize')
const { ROLES } = require('../constants')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate ({ Offer, Contest, Rating, RefreshToken }) {
      User.hasMany(Offer, { foreignKey: 'userId', targetKey: 'id' })
      User.hasMany(Contest, { foreignKey: 'userId', targetKey: 'id' })
      User.hasMany(Rating, { foreignKey: 'userId', targetKey: 'id' })
      User.hasMany(RefreshToken, { foreignKey: 'userId' })
    }
  }

  User.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: false
      },
      displayName: {
        field: 'display_name',
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      avatar: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.ENUM(...Object.values(ROLES)),
        allowNull: false
      },
      balance: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      accessToken: {
        field: 'access_token',
        type: DataTypes.TEXT,
        allowNull: true
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      timestamps: false
    }
  )
  return User
}
