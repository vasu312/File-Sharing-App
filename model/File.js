const { DataTypes, Sequelize } = require("sequelize");
// let sequelize  = new Sequelize();

module.exports = (sequelize) => {
  const File = sequelize.define(
    "file",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      downloadCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return File;
};
