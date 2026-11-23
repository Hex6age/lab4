const tableService = require('../services/TableService');
const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ message: 'Не заполнены обязательные поля' });
  }

  try {
    const data = tableService._get('login');
    
    // Ищем совпадение по email и паролю
    const user = data.records.find(r => r.Email === email && r.Password === password);

    if (!user) {
      res.status(400).json({ message: 'Пользователь не найден', recordId: 0 });
    } else {
      // Возвращаем id записи (rec_login_1)
      res.status(200).json({ 
        message: 'Успешная авторизация', 
        recordId: user.id 
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;