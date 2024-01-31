const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/roles', async (req, res) => {
    try {
        const newRole = await db.role.create({
            name: req.body.name
        });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/roles', async (req, res) => {
    try {
        const roles = await db.role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/roles/:id', async (req, res) => {
    try {
        const role = await db.role.findByPk(req.params.id);
        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/roles/:id', async (req, res) => {
    try {
        const role = await db.role.findByPk(req.params.id);
        if (role) {
            await role.update({
                name: req.body.name
            });
            res.status(200).json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/roles/:id', async (req, res) => {
    try {
        const role = await db.role.findByPk(req.params.id);
        if (role) {
            await role.destroy();
            res.status(200).json({ message: 'Role deleted successfully' });
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
