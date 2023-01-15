const db = require("../utils/database");
const {DataTypes} =require("sequelize");
const Users = require("./users.model");
const Courses = require("./courses.model");

const UsersCourses=db.define("users_courses",{
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
  },
  user_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  course_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
});

module.exports =UsersCourses;