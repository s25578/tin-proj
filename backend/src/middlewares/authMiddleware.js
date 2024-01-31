const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('./../models');

const secretKey = 'TIN';

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);

        const user = await User.findOne({ where: { id: decoded.userId } });
        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Go away, we love admins only here' });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { login: req.body.login } });
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
};

module.exports = { authenticate, isAdmin, login };
