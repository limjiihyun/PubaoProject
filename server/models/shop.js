const shop = function (Sequelize, Database) {
  return Sequelize.define(
    "shop",
    {
      id: {
        type: Database.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncreament: true,
      },
      product_img: {
        type: Database.STRING(50),
        allowNull: false,
      },
      product_title: {
        type: Database.STRING(30),
        allowNull: false,
      },
      price: {
        type: Database.INTEGER,
        allowNull: false,
      },
      content: {
        type: Database.TEXT,
        allowNull: true,
      },
    },
    {
      tablename: "shop",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = shop;
