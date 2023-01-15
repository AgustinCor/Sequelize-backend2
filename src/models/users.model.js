const db =require("../utils/database");
const {DataTypes}=require("sequelize");

const Users=db.define("users",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,                
  },
  firstName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false, 
    unique:true,
    validateEmail:{
        isEmail:true,
    }
  }
});

module.exports= Users;