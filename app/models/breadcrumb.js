'use strict';
module.exports = (sequelize, DataTypes) => {
  const breadcrumb = sequelize.define(
    'breadcrumb',
    {
      trackerId: DataTypes.INTEGER,
      position: DataTypes.GEOMETRY('POINT', 4326),
      time: DataTypes.DATE
    },
    {}
  );
  breadcrumb.associate = function(models) {
    // associations can be defined here
  };
  return breadcrumb;
};
