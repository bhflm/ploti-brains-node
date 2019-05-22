module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('maker', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {     // eslint-disable-line
    return queryInterface.dropTable('maker');
  }
};
