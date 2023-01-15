const CoursesServices = require("../services/courses.services");


const getAllCourses =async (req,res) =>{
    try{
      const result=await CoursesServices.getAll();
      res.json(result);
    }catch(error){
      res.status(400).json(error.message);
    }
};

const getCoursesWithInfo =async(req,res) =>{
  try{
   const result =await CoursesServices.CoursesWithInfo();
   res.json(result);
  }catch(error){
    res.status(400).json(error.message);
  }
};

const createCourse= async (req,res) =>{
      try{
        const newCourse=req.body;
        const result =await CoursesServices.courseCreated(newCourse);
        res.json(result);
      }catch(error){
        res.status(400).json(error.message);
      }
}

const updateCourse= async (req,res) =>{
    try{
        const {id} =req.params;
        const field =req.body;
        const result =await CoursesServices.courseUpdated(field,{
            where:{id},
        });
        res.json({
           message:"Course updated",
           data:result
        });
    }catch(error){
        res.status(400).json(error.message);
    }
}

module.exports ={
    getAllCourses,
    getCoursesWithInfo,
    createCourse,
    updateCourse,
}