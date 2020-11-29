const router = require("express").Router();
const notesRoute = require("./notes");

// Post routes
router.use("/notes", notesRoute);

module.exports = router;