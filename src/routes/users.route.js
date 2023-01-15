const {Router} = require('express');
const { getAllUsers,
      getUserById,
      getUserWithCourses,
      createUsers,
      updateUsers,
 } = require('../controllers/users.controller');



const router = Router();

router.get("/users",getAllUsers);
router.get("/users/:id/courses",getUserWithCourses);
router.get("/users/:id",getUserById);
router.post("/users",createUsers);
router.put("/users/:id",updateUsers);

module.exports =router