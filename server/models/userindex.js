const Sequelize = require("sequelize");
const user = require("./user");
const community = require("./community");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "mysql",
  host: "localhost",
});

const User = user(sequelize, Sequelize);
const Community = community(sequelize, Sequelize, User);

module.exports = {
  User,
  Community,
  sequelize,
};
