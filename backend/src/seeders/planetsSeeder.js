require('dotenv').config();
const db = require('../models');

const data = [
    { author_id: 1, category_id: 1, name: 'Earth', radius: 6371, description: 'Our home planet', is_life: true, created_at: new Date() },
    { author_id: 1, category_id: 2, name: 'Mars', radius: 3389, description: 'The Red Planet', is_life: false, created_at: new Date() }
];

async function seed() {
    try {
        for (const datum of data) {
            await db.planet.create(datum);
        }
        console.log('Planets seeded successfully.');
    } catch (error) {
        console.error('Error seeding planets:', error);
    }
}

seed();