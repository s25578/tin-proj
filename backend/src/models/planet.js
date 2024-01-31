module.exports = (sequelize, Sequelize) => {
    return sequelize.define('planet', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        radius: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        is_life: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated_at: {
            type: Sequelize.DATE
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
};
