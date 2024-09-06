// pages/api/login.js

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const users = [
  // Example user, in real-world applications, fetch from the database
  { username: 'testuser', password: bcrypt.hashSync('password123', 8) },
];

export default function handler(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) return res.status(400).json({ message: 'User not found' });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
}
