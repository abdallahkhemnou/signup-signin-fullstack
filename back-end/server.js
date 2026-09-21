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
server.post('/signin', async (req, res) => { 
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (result.rows.length === 0) {
    return res.status(401).send('Email not found');
  };
  const user = result.rows[0];
  if (user.password !== password) {
    return res.status(401).send('Incorrect password');
  }
  res.send(user);
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});