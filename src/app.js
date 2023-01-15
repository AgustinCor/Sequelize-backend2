const express=require("express");
const Users = require("./models/users.model");
const db= require("./utils/database");
const app=express();

const coursesRoutes=require("./routes/courses.route");
const categoriesRoutes=require("./routes/categories.route");
const usersRoutes=require("./routes/users.route");
const videosRoutes =require("./routes/videos.route");
const initModels = require("./models/initModels");

const PORT = 8000;

app.use(express.json());

initModels();

app.use("/api/v1",usersRoutes);
app.use("/api/v1",videosRoutes);
app.use("/api/v1",categoriesRoutes);
app.use("/api/v1",coursesRoutes)

/*app.get("/users",async(req,res) => {
  try{
    const result =await Users.findAll();
    res.status(200).json(result);
  }catch(error){
    console.log(error);
  }
});*/

app.listen(PORT,()=>{
  console.log("Server corriendo en puerto 8000");
});

db.sync()
  .then(()=> console.log("Sincronizacion exitosa"))
  .catch((error) => console.log(error));
