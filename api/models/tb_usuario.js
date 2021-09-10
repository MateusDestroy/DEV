const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_usuario', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_login: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
