module.exports = (sequelize, DataTypes) => {
  const Maker = sequelize.define(
    'maker',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
      paranoid: true
    }
  );
  Maker.associate = function(models) {  // eslint-disable-line

  };
  return Maker;
};
