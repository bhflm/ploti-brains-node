'use strict';
module.exports = (sequelize, DataTypes) => {
  const loaf = sequelize.define(
    'loaf',
    {
      name: DataTypes.STRING,
      loafPolygon: DataTypes.GEOMETRY('POLYGON'),
      loafLine: DataTypes.GEOMETRY('LINESTRING')
    },
    {}
  );
  loaf.associate = function(models) {
    // associations can be defined here
  };
  return loaf;
};
