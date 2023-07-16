const community = function (Sequelize, DataTypes) {
  const Community = Sequelize.define(
    "community",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      favorite_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      favorite_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      repleNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "community",
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Community;
};

module.exports = community;
