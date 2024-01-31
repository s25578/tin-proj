require('dotenv').config();
const db = require('../models');
const bcrypt = require('bcryptjs');

const data = [
    { role_id: 1, login: 'user1', password: 'password123', created_at: new Date() },
    { role_id: 2, login: 'user2', password: 'password123', created_at: new Date() }
];

for (let user of data) {
    user.password = bcrypt.hashSync(user.password, 10);
}

async function seed() {
    try {
        for (const datum of data) {
            await db.user.create(datum);
        }
        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

seed();