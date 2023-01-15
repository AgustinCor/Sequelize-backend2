const Categories = require("../models/categories.model");

class CategoriesServices{
   
  static async getAll(){
    try{
      const result =await Categories.findAll();
      return result;
    }catch(error){
        throw error;
    }
  }
   

  static async categoryCreated(newCategory){
    try{
      const result =await Categories.create(newCategory);
      return result;
    }catch(error){
        throw error;
    }
  }

  static async categoryDeleted(id){
    try {
      const result=Categories.destroy(id);
      return result;
    }catch(error){
      throw error;
    }
  }

}

module.exports = CategoriesServices;