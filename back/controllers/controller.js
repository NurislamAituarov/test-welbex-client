import db from '../db.js';

class Controller {
  async createTableItem(req, res, next) {
    const { date, name, amount, distance } = req.body;
    const newTable = await db.query(
      `INSERT INTO tableItem (date, name, amount, distance) values($1,$2,$3,$4) RETURNING *`,
      [date, name, amount, distance],
    );
    res.json(newTable.rows[0]);
  }
  async getTableItems(req, res, next) {
    const table = await db.query(`SELECT * FROM tableItem`);
    console.log('getTable');
    res.json(table.rows);
    try {
    } catch (e) {
      res.status(500).json('error server');
    }
  }
}

export default new Controller();
