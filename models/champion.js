module.exports = function(sequelize, Sequelize) {
	return(sequelize.define('champion', {
		 		 title:     Sequelize.STRING,
         winingteam:      Sequelize.STRING,
         loosingteam:      Sequelize.STRING,
         series:           Sequelize.STRING,
         mvp:              Sequelize.STRING,
	}, {
		defaultScope: {
			order: [['createdAt', 'DESC']]
		}
	}));
};
