const UsersServices = require("../services/users.services");


const getAllUsers = async(req,res) =>{
    try{
      const result =await UsersServices.getAll();
      res.json(result);
    }catch(error){
       res.status(400).json(error.message);
    }
}

const getUserById =async(req,res) =>{
    try{ 
      const {id} =req.params
      const result =await UsersServices.getById(id);
      res.json(result);
    }catch(error){
     res.status(400).json(error.message);
    }
}

const getUserWithCourses= async(req,res)=>{
  try{
    const {id} =req.params;
    const result=await UsersServices.getUsersCourses(id);
    res.json({
      message:"yendo a la tabla pivote",
      data:result,
    });
  }catch(error){
    res.status(400).json({
      error:error.messages,
      details:error.stack,
    });
  }
}

const createUsers= async(req,res) =>{
  try{
    const newUser= req.body;
    const result =await UsersServices.userCreated(newUser);
    res.json({
        message:"User created",
        data:result,
    })
  }catch(error){
    res.status(400).json(error.message);
  }
}

const updateUsers = async(req,res)=>{
    try{
      const {id} =req.params;
      const field=req.body;
      const result =await UsersServices.userUpdated(field,{
        where:{id},
      });
      res.json({
        message:"The user has been updated",
        data:result,
      })
    }catch(error){
        res.status(400).json(error.message);
    }
}

module.exports ={
    getAllUsers,
    getUserById,
    getUserWithCourses,
    createUsers,
    updateUsers,
}