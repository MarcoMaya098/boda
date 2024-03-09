const pool = require("../db");

const createClient = async (req, res, next) => {
  try {
    const { firstname, middlename, lastname } = req.body;

    const newClient = await pool.query(
      "INSERT INTO client (firstname, middlename, lastname) VALUES ($1, $2, $3) RETURNING *",
      [firstname, middlename, lastname]
    );

    //console.log(newClient)
    res.json(newClient.rows[0]);
  } catch (error) {
    next(error);
  }

  // const Client= req.body
  // console.log(Client)
  // res.send("Creating a Client")
};

const getAllClients = async (req, res, next) => {
  try {
    const allClients = await pool.query("SELECT * FROM client");
    res.json(allClients.rows);
  } catch (error) {
    next(error);
  }
};

const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM client WHERE id = $1", [id]);
    console.log(result)

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Client not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, middlename, lastname } = req.body;
    const result = await pool.query(
      "UPDATE client SET firstname = $1, middlename = $2, lastname = $3 WHERE id = $4 RETURNING *",
      [firstname, middlename, lastname, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Client not found" });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM client WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Client not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClient,
  updateClient,
  deleteClient,
};
