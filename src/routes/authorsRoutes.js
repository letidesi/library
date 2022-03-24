import express from "express";
import authorController from "../controllers/authorsController.js";

const router = express.Router();

router.get("/authors", authorController.listAuthors);
router.get("/authors/:id", authorController.listAuthorById);
router.post("/authors", authorController.registerAuthor);
router.put("/authors/:id", authorController.updateAuthor);
router.delete("/authors/:id", authorController.deleteAuthor);

export default router;
