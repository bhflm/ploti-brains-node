module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
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
      lastname: {
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
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      license: {
        type: DataTypes.STRING,
        allowNull: false
      },
      car: {
        type: DataTypes.STRING,
        allowNull: false
      },
      plate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      kilometers: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
  User.associate = function(models) { // eslint-disable-line
    User.belongsTo(models.campaign);
  };
  return User;
};
