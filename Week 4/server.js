require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});

module.exports = app; // KJO është shumë e rëndësishme për testet
