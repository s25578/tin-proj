require('dotenv').config();
const db = require('../models');

const data = [
    { name: 'Admin' },
    { name: 'User' }
];

async function seed() {
    try {
        for (const datum of data) {
            await db.role.create(datum);
        }
        console.log('Roles seeded successfully.');
    } catch (error) {
        console.error('Error seeding roles:', error);
    }
}

seed();