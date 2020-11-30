const router = require("express").Router();
const notesController = require("../notesController");

// Matches with "/api/user/notes"
router
  .route("/user/")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/user/notes/:id"
router
  .route("/user/:id")
  .get(notesController.findById)
  .delete(notesController.remove);

module.exports = router;