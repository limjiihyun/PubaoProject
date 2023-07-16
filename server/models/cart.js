const cart = function (Sequelize, Database) {
  return Sequelize.define(
    "cart",
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
      product_id: {
        type: Database.BIGINT,
        allowNull: false,
      },
      quantity: {
        type: Database.INTEGER,
        allowNull: true,
      },
    },
    {
      tablename: "cart",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = cart;
