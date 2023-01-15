const {Router} = require('express');
const { getAllVideos ,
    createNewVideo,
    deleteVideo,
} = require('../controllers/videos.controller');



const router = Router();

router.get("/videos",getAllVideos);
router.post("/videos",createNewVideo);
router.delete("/videos/:id",deleteVideo);

module.exports =router