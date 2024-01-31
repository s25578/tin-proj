module.exports = (sequelize, Sequelize) => {
    return sequelize.define('boost', {
        planet_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'planet',
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        comment: {
            type: Sequelize.TEXT
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: false
    });
};
