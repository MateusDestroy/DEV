const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_matricula', {
    id_matricula: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_aluno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nr_chamada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_curso: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nm_turma: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_matricula',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
    ]
  });
};
