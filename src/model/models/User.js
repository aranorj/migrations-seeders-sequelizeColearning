
module.exports = (sequelize, DataTypes) => {
  let alias = "Users"
  let columns = {

  }
  let config = {}
  let User = sequelize.define(alias, columns, config);
  return User;
};