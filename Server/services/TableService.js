const fs = require('fs');
const path = require('path');

class TablesService {
  constructor() {
    this.dbPath = path.join(__dirname, '../db.json');
  }
  _readDb() {
    const fileContent = fs.readFileSync(this.dbPath, 'utf8');
    return JSON.parse(fileContent);
  }
  _writeDb(data) {
    fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2), 'utf8');
  }
  _get(tableName) {
    try {
      const db = this._readDb();
      const records = db[tableName] || [];
      return { total: records.length, records };
    } catch (error) {
      console.error('Ошибка чтения БД:', error);
      throw error;
    }
  }
  _post(tableName, newRecord) {
    const db = this._readDb();
    if (!db[tableName]) db[tableName] = [];
    db[tableName].push(newRecord);
    this._writeDb(db);
    return newRecord;
  }
  _put(tableName, id, updatedData) {
    const db = this._readDb();
    if (!db[tableName]) return null;

    const index = db[tableName].findIndex(item => item.id === id);
    
    if (index !== -1) {
      db[tableName][index] = { ...db[tableName][index], ...updatedData };
      this._writeDb(db);
      return db[tableName][index];
    }
    return null;
  }
  _delete(tableName, id) {
    const db = this._readDb();
    if (!db[tableName]) return false;

    const initialLength = db[tableName].length;
    db[tableName] = db[tableName].filter(item => item.id !== id);

    if (db[tableName].length < initialLength) {
      this._writeDb(db);
      return true;
    }
    return false;
  }
}

module.exports = new TablesService();