const {Router} =require("express");
const { createCategories,
     getAllCategories,
      deleteCategories } = require("../controllers/categories.controller");

const router = Router();

router.get("/categories",getAllCategories);
router.post("/categories",createCategories);
router.delete("/categories/:id",deleteCategories);

module.exports =router;