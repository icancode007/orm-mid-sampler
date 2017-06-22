'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('champions', {
      id: {
        type:          Sequelize.INTEGER,
        primaryKey:    true,
        autoIncrement: true
      },
      title:     Sequelize.STRING,
      winingteam:      Sequelize.STRING,
      loosingteam:      Sequelize.STRING,
      series:           Sequelize.STRING,
      mvp:              Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('champions');

  }
};
