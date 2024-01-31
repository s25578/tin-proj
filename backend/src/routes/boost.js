const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/boosts', async (req, res) => {
    try {
        const newBoost = await db.boost.create({
            planet_id: req.body.planet_id,
            user_id: req.body.user_id,
            comment: req.body.comment
        });
        res.status(201).json(newBoost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/boosts', async (req, res) => {
    try {
        const boosts = await db.boost.findAll({
            include: [db.user, db.planet] // assuming you want to include related user and planet data
        });
        res.status(200).json(boosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/boosts/count/:planetId', async (req, res) => {
    try {
        const count = await db.boost.count({
            where: { planet_id: req.params.planetId }
        });
        res.status(200).json({ planetId: req.params.planetId, boostCount: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
