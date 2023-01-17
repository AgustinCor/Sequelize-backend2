const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesServices{
    static async getAll ()  {
      try{
        const result = await Courses.findAll();
        return result;
      }catch(error){
        throw error;
      }
    }
   
    static async CoursesWithInfo(){
       try{
        const result =await Courses.findAll({
          include:[
          {
           model:Videos,
           as:"video"},
           {
           model:Categories,
           as:"category"
          }],
        }); 
        return result;
       }catch(error){
        throw error;
       }
    };

    static async courseCreated(newCourse) {
        try{
          const result =await Courses.create(newCourse);
          return result;
        }catch(error){
            throw error;
        }
    }

    static async courseUpdated(field,id){
        try{
          const result=await Courses.update(field,id);
          return result;
        }catch(error){
            throw error;
        }
    }
}

module.exports =CoursesServices;