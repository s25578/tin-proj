const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/planets', async (req, res) => {
    try {
        const newPlanet = await db.planet.create({
            category_id: req.body.category_id,
            author_id: req.body.author_id,
            name: req.body.name,
            radius: req.body.radius,
            description: req.body.description,
            is_life: req.body.is_life
        });
        res.status(201).json(newPlanet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/planets', async (req, res) => {
    try {
        const planets = await db.planet.findAll();
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/planets/:id', async (req, res) => {
    try {
        const planet = await db.planet.findByPk(req.params.id);
        if (planet) {
            res.status(200).json(planet);
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/planets/:id', async (req, res) => {
    try {
        const planet = await db.planet.findByPk(req.params.id);
        if (planet) {
            await planet.update({
                name: req.body.name,
                radius: req.body.radius,
                description: req.body.description,
                is_life: req.body.is_life
            });
            res.status(200).json(planet);
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/planets/:id', async (req, res) => {
    try {
        const planet = await db.planet.findByPk(req.params.id);
        if (planet) {
            await planet.destroy();
            res.status(200).json({ message: 'Planet deleted successfully' });
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
