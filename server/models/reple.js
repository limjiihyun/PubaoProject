module.exports = (sequelize, DataTypes) => {
    const Reple = sequelize.define(
      'reple',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nickname: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        reple: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        detailnum: {
          type:DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        tableName: 'reple',
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return Reple;
  };
  