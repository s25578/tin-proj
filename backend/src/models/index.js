const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.planet = require('./planet')(sequelize, Sequelize);
db.role = require('./role')(sequelize, Sequelize);
db.boost = require('./boost')(sequelize, Sequelize);
db.category = require('./category')(sequelize, Sequelize);

db.user.belongsTo(db.role , { foreignKey: 'role_id' });
db.planet.belongsTo(db.category , { foreignKey: 'category_id' });
db.planet.belongsTo(db.user , { foreignKey: 'author_id' });
db.planet.belongsToMany(db.user, { through: db.boost, foreignKey: 'planet_id' });
db.user.belongsToMany(db.planet, { through: db.boost, foreignKey: 'user_id' });

module.exports = db;