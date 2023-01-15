const {Router} =require("express");
const { getAllCourses,
     createCourse,
      updateCourse,
       getCoursesWithInfo } = require("../controllers/courses.controller");

const router=Router();

router.get("/courses",getAllCourses);
router.get("/courses/info",getCoursesWithInfo);
router.post("/courses",createCourse);
router.put("/courses/:id",updateCourse);

module.exports =router;