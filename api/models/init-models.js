var DataTypes = require("sequelize").DataTypes;
var _tb_chat = require("./tb_chat");
var _tb_matricula = require("./tb_matricula");
var _tb_sala = require("./tb_sala");
var _tb_usuario = require("./tb_usuario");

function initModels(sequelize) {
  var tb_chat = _tb_chat(sequelize, DataTypes);
  var tb_matricula = _tb_matricula(sequelize, DataTypes);
  var tb_sala = _tb_sala(sequelize, DataTypes);
  var tb_usuario = _tb_usuario(sequelize, DataTypes);


  return {
    tb_chat,
    tb_matricula,
    tb_sala,
    tb_usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
