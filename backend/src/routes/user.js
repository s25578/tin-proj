const express = require('express');
const router = express.Router();
const db = require('../models');
const { authenticate, isAdmin } = require('../middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    try {
        const newUser = await db.user.create({
            role_id: req.body.role_id,
            login: req.body.login,
            password: req.body.password
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await db.user.findOne({ where: { login: req.body.login } });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role_id }, secretKey, { expiresIn: '1h' });
        res.json({ token: token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

//for admin only
router.get('/users', authenticate, isAdmin, async (req, res) => {
    try {
        const users = await db.user.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//for admin only
router.get('/users/:id', authenticate, isAdmin, async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//for admin only
router.put('/users/:id', authenticate, isAdmin, async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id);
        if (user) {
            await user.update({
                role_id: req.body.role_id,
                login: req.body.login,
                password: req.body.password
            });
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//for admin only
router.delete('/users/:id', authenticate, isAdmin, async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
