const tableService = require('../services/TableService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = tableService._get('users');
  res.json(data.records);
});

router.get('/:id', (req, res) => {
  const data = tableService._get('login');
  const loginRecord = data.records.find(item => item.id === req.params.id);
  
  if (!loginRecord) return res.status(404).json({ message: 'Логин не найден' });

  const usersData = tableService._get('users');
  const user = usersData.records.find(u => u.id === loginRecord.UserId);

  if (user) res.json(user);
  else res.status(404).json({ message: 'Пользователь не найден' });
});

module.exports = router;