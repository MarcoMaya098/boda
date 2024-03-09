const { Router } = require("express");



const { createConfirmation, getAllConfirmations, getConfirmation, updateConfirmation, deleteConfirmation,
} = require("../controllers/confirmation.controller");

const { Auth, isAuthenticated } = require('../controllers/auth.controller')


const router = Router();

// create a task
// router.post("/person", createPerson);
// router.get("/person", getAllPerson);
// router.get("/person/:id", getPerson);
// router.put("/person/:id",  updatePerson);
// router.delete("/person/:id", deletePerson);



// router.post("/confirmation", isAuthenticated, createConfirmation);
// router.get("/confirmation", isAuthenticated, getAllConfirmations);
// router.get("/confirmation/:id",isAuthenticated, getConfirmation);
// router.put("/confirmation/:id", isAuthenticated, updateConfirmation);


router.post("/confirmation", createConfirmation);
router.get("/confirmation", getAllConfirmations);
router.get("/confirmation/:id", getConfirmation);
router.put("/confirmation/:id", updateConfirmation);

// router.delete("/confirmation/:id",isAuthenticated, deleteClient);

// router.post("/client", isAuthenticated, createClient);
// router.get("/client", isAuthenticated, getAllClients);
// router.get("/client/:id",isAuthenticated, getClient);
// router.put("/client/:id", isAuthenticated, updateClient);
// router.delete("/client/:id",isAuthenticated, deleteClient);

// router.get('/principal', isAuthenticated);
// router.post('/login', Auth.login);
// router.post('/register', Auth.register)

module.exports = router;
