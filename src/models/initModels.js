const Users = require("./users.model");
const Courses =require("./courses.model");
const Videos =require("./videos.model");
const UsersCourses = require("./users_courses.model");
const Categories = require("./categories.model");


const initModels =() =>{
  Users.hasMany(UsersCourses,{ as:"courses",foreignKey:"user_id" } );
  UsersCourses.belongsTo(Users,{as:"users",foreignKey:"user_id"});

  Courses.hasMany(UsersCourses,{as:"users",foreignKey:"course_id"});
  UsersCourses.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
  ////
  Courses.hasMany(Categories,{as:"category",foreignKey:"course_id"});
  Categories.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
  Courses.hasMany(Videos,{as:"video",foreignKey:"course_id"});

  Videos.belongsTo(Courses ,{as:"course",foreignKey:"course_id"});

};

module.exports = initModels;