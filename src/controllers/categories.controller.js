const CategoriesServices = require("../services/categories.services");


const getAllCategories =async(req,res) =>{
  try{     
     const result = await CategoriesServices.getAll();
     res.json(result);
  }catch(error){
    res.status(400).json(error.message);
  }
};

const createCategories=async (req,res) =>{
    try{ 
       const newCategory=req.body;
       const result =await CategoriesServices.categoryCreated(newCategory);
       res.json({
         message:"category created",
         data:result,
       });
    }catch(error){
      res.status(400).json(error.message);
    }
}

const deleteCategories =async (req,res) =>{
    try{
       const {id} =req.params;
       const result = await CategoriesServices.categoryDeleted({
        where:{id},
       })
     res.json({
       message:"category deleted",
       data:result
     });
    }catch(error){
        res.status(400).json(error.message);
    }
}

module.exports ={
    getAllCategories,
    createCategories,
    deleteCategories,
};