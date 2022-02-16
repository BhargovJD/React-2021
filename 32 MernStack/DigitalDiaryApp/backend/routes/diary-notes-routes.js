const express = require("express");
const {
  getNotes,
  CreateNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controllers/diary-notes-controller");
const router = express.Router();
const protect = require("../middlewares/auth-middleware");

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(protect, getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;
