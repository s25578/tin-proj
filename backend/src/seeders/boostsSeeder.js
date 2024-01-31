require('dotenv').config();
const db = require('../models');

const data = [
    { planet_id: 1, user_id: 1, comment: 'Amazing planet!', created_at: new Date() },
    { planet_id: 2, user_id: 2, comment: 'Love this place!', created_at: new Date() }
];

async function seed() {
    try {
        for (const datum of data) {
            await db.boost.create(datum);
        }
        console.log('Boosts seeded successfully.');
    } catch (error) {
        console.error('Error seeding boosts:', error);
    }
}

seed();