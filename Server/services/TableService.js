const fs = require('fs');
const path = require('path');

class TablesService {
  constructor() {
    // Путь к нашему локальному JSON файлу
    this.dbPath = path.join(__dirname, '../db.json');
  }

  // Читаем файл и возвращаем данные
  _get(tableName) {
    try {
      const fileContent = fs.readFileSync(this.dbPath, 'utf8');
      const db = JSON.parse(fileContent);
      
      // Возвращаем в формате, который ожидают контроллеры (как у MWS Tables)
      const records = db[tableName] || [];
      return { total: records.length, records };
    } catch (error) {
      console.error('Ошибка чтения БД:', error);
      throw error;
    }
  }
}

module.exports = new TablesService();