const express = require('express');
const server = express();
const pool = require('./db');
server.use(express.json());
server.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.send(result.rows);
});
server.post('/signup', async (req, res) => { 
  const { user_name, email, password } = req.body; 
  await pool.query('INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3)', [user_name, email, password]);
  res.status(201).send('User created successfully');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});