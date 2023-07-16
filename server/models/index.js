"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// 데이터베이스 관계 설정
db.User = require("./user")(sequelize, Sequelize);
db.Home = require("./home")(sequelize, Sequelize);
db.Community = require("./community")(sequelize, Sequelize);
db.Shop = require("./shop")(sequelize, Sequelize);
db.Cart = require("./cart")(sequelize, Sequelize);
db.Reple = require("./reple")(sequelize, Sequelize);

// db.User.hasMany(db.Community,{as:"communities", foreigKey:"id"})

// db.Community.belongsTo(db.User, {as : "User", foreignkey:"user_id"})
// db.User.hasMany(db.Cart,{as:"cartes", foreigKey:"user_id"})

// db.Home.belongsTo(db.User)//, {as:"homes", foreigKey:"user_id"})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
