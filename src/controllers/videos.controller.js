const VideosServices =require("../services/videos.services");

const getAllVideos =async(req,res)=>{
    try{
      const result =await VideosServices.getAll();
      res.json(result);
    }catch(error){
      res.status(400).json(error.message);
    }
}

const createNewVideo =async(req,res) =>{
  try{
    const newVideo =req.body;
    const result =await VideosServices.createVideo(newVideo);
    res.json({
      message:"Video crado",
      data:result,
    });
  }catch(error){
    res.status(400).json(error.message);
  }
}  

const deleteVideo =async (req,res) =>{
  try {
   const {id} =req.params;
   const result=await VideosServices.videoDeleted({
    where:{id}},
    );
   res.json({
    message:"Video eliminado",
    data:result,
   })
  }catch(error){
  res.status(400).json(error.message);
  }
}

module.exports = { 
    getAllVideos,
    createNewVideo,
    deleteVideo,
};