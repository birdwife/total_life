const express = require('express');
require('dotenv').config();
const app = express();
const { Pool } = require('pg');

const PORT = 3001;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
});

const cors = require('cors');
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM appts;')
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});