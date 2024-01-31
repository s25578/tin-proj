require('dotenv').config();
const db = require('../models');

const data = [
    { name: 'Gigantic' },
    { name: 'Small' },
    { name: 'Cold' },
    { name: 'Hot' },
    { name: 'Livable' }
];

async function seed() {
    try {
        for (const datum of data) {
            await db.category.create(datum);
        }
        console.log('Categories seeded successfully.');
    } catch (error) {
        console.error('Error seeding categories:', error);
    }
}

seed();