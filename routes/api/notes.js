const router = require("express").Router();
const notesController = require("../notesController");

// Matches with "/api/books"
router
  .route("/")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(notesController.findById)
  .delete(notesController.remove);

module.exports = router;