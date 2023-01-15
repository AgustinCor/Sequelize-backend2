const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users_courses.model");

class UsersServices{
  static async getAll (){
     try{
        const result=await Users.findAll();
        return result
     }catch(error) {
        throw error;
     }
  };

  static async getById (id){
   try{
      const result =await Users.findByPk(id,{
         attributes:["firstName","lastName","email","id"],
      });
      return result;
   }catch(error){
      throw error;
   }
  }
  
  static async getUsersCourses(id){
   try{
     const result=await Users.findOne({
        where:{id},
        attributes:["firstName","lastName","email","id"],
        include:{
         model:UsersCourses,
         as:"courses",
         attributes:["id"],
         include:{
            model:Courses,
            as:"course",
         },
        },
     })
     return result;
   }catch(error){
      throw error;
   }
  }

  static async userCreated(newUser){
   try{
     const result=await Users.create(newUser);
     return result;
   }catch(error){
      throw error;
   }
  }

  static async userUpdated(id,field){
   try{
      const result=await Users.update(id,field);
      return result;
   }catch(error){
      throw error;
   }
  }
};

module.exports = UsersServices;