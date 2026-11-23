const tableService = require('../services/TableService');
const express = require('express');
const router = express.Router();

// Получить всех
router.get('/', (req, res) => {
  const data = tableService._get('users');
  res.json(data.records);
});

// Получить по ID (пригодится для 3-го задания)
router.get('/:id', (req, res) => {
  const data = tableService._get('users');
  const user = data.records.find(u => u.id === req.params.id);
  
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

module.exports = router;