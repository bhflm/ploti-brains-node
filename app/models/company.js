module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'company',
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
      timestamps: false
    }
  );
  Company.associate = function(models) {  // eslint-disable-line
    Company.hasMany(models.campaign);
  };
  return Company;
};
