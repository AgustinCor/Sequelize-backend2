const Videos = require("../models/videos.model");

class VideosServices{
  static async getAll(){
    try{
      const result = Videos.findAll();
      return result;               
    }catch(error){
        throw error;
    }
  }

  static async createVideo(newVideo){
    try{
      const result=Videos.create(newVideo);
      return result;
    }catch(error){
      throw error;
    }
  }

  static async videoDeleted(id){
    try {
      const result=Videos.destroy(id);
      return result;
    }catch(error){
      throw error;
    }
  }
}

module.exports = VideosServices;