const db =require("../utils/database");
const {DataTypes} =require('sequelize');
const Courses = require("./courses.model");

const Videos =db.define("videos",{
   id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,
   },
   title:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   url:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   course_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
   },
});

module.exports =Videos;