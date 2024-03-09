const pool = require("../db");

const createConfirmation = async (req, res, next) => {
  try {
    const { nameFull, assistance, companions, companionsMount, message } = req.body;

    const newConfirmation = await pool.query(
      'INSERT INTO "confirmation" ("namefull", "assistance", "companions", "companionsmount", "message") VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nameFull, assistance, companions, companionsMount, message]
    );

    res.json(newConfirmation.rows[0]);
  } catch (error) {
    // next(error);
    res.status(500).send(error.message)
  }
};

const getAllConfirmations = async (req, res, next) => {
  try {
    const allConfirmations = await pool.query('SELECT * FROM "confirmation"');
    res.json(allConfirmations.rows);
  } catch (error) {
    // next(error);
    res.status(500).send(error.message)
  }
};

const getConfirmation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM "confirmation" WHERE "id" = $1', [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Confirmation not found" });

    res.json(result.rows[0]);
  } catch (error) {
    // next(error);
    res.status(500).send(error.message)
  }
};

const updateConfirmation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nameFull, assistance, companions, companionsMount, message } = req.body;

    const result = await pool.query(
      'UPDATE "confirmation" SET "namefull" = $1, "assistance" = $2, "companions" = $3, "companionsmount" = $4, "message" = $5 WHERE "id" = $6 RETURNING *',
      [nameFull, assistance, companions, companionsMount, message, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Confirmation not found" });

    res.json(result.rows[0]);
  } catch (error) {
    // next(error);
    res.status(500).send(error.message)

  }
};

const deleteConfirmation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM "confirmation" WHERE "id" = $1', [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Confirmation not found" });
    
    res.sendStatus(204);
  } catch (error) {
    // next(error);
    res.status(500).send(error.message)

  }
};

module.exports = {
  createConfirmation,
  getAllConfirmations,
  getConfirmation,
  updateConfirmation,
  deleteConfirmation
};
