// pages/api/register.js

import bcrypt from 'bcryptjs';

let users = []; // In real-world, this should be connected to a database

export default function handler(req, res) {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  res.status(200).json({ message: 'Registration successful' });
}
