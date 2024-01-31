const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const planetRoutes = require('./routes/planet');
const roleRoutes = require('./routes/role');
const boostRoutes = require('./routes/boost');
const categoryRoutes = require('./routes/category');
const userRoutes = require('./routes/user');

app.use(boostRoutes);
app.use(planetRoutes);
app.use(roleRoutes);
app.use(categoryRoutes);
app.use(userRoutes);

const { login, authenticate } = require('./middlewares/authMiddleware');

app.post('/login', login);

app.use(authenticate);

app.get('/', (req, res) => {
    res.send({"name":"Planet Builder", "version":"0.0.3"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
