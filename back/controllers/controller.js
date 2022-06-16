import db from '../db.js';

class Controller {
  async createTableItem(req, res, next) {
    const { active, price, characteristics, name_car, url_img } = req.body;
    const newPerson = await db.query(
      `INSERT INTO newListItem (active, price, characteristics, name_car, url_img) values($1,$2,$3,$4,$5) RETURNING *`,
      [active, price, characteristics, name_car, url_img],
    );
    res.json(newPerson.rows[0]);
  }
  async getTableItems(req, res, next) {
    try {
      const cars = await db.query(`SELECT * FROM newListItem`);
      const characteristics = await db.query(`SELECT * FROM characteristics`);
      cars.rows.map(
        (el, i) => (el.characteristics = characteristics.rows[el.characteristics_id - 1]),
      );

      res.json(cars.rows);
    } catch (e) {
      res.status(500).json('error');
    }
  }
}

export default new Controller();
