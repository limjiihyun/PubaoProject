const home = function (Sequelize, Database) {
  return Sequelize.define(
    "home",
    {
      id: {
        type: Database.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncreament: true,
      },
      user_id: {
        type: Database.BIGINT,
        allowNull: false,
      },
    },
    {
      tablename: "home",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = home;
