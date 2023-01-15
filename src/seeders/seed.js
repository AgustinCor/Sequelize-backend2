const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users_courses.model");
const Videos = require("../models/videos.model");
const db =require("../utils/database");

const users =[
    {firstName:"Carlos",lastName:"Gomez", password:6534,email:"carlos@gmail.com"},//1
    {firstName:"Martina",lastName:"De Ochoa", password:6565654,email:"martina@gmail.com"},//2
    {firstName:"Belen",lastName:"Mendez", password:32465654,email:"belen@gmail.com"},//3
];

const courses =[
  {title:"Programacion", description:"se codea un programa",instructor:"Leonel Ponce"},//1
  {title:"Carpinteria", description:"Se aprende a tallar madera",instructor:"Jorge Raul"},//2
  {title:"Fontaneria", description:"como construir canales correctamente",instructor:"Miguel Ruiz"},//3
  {title:"Disenio de retratos", description:"como ilustrar correctamente",instructor:"Julio Diaz"},//4
  {title:"Marketing", description:"aprender a hacer buenos negocios",instructor:"Juana Veis"},//5
];

const usersCourses=[
  {user_id:1,course_id:2},
  {user_id:1,course_id:3},
  {user_id:2,course_id:1},
  {user_id:2,course_id:3},
  {user_id:3,course_id:4},
  {user_id:3,course_id:1},
  {user_id:3,course_id:5},
];

const videos=[
    {title:"Como empezar en js",url:"https://youtube.canalprogramacion",course_id:1},
    {title:"Como arreglar una mesa",url:"https://youtube.canalcarpentiria",course_id:2},
    {title:"Como reparar canios",url:"https://youtube.canalfontaneria",course_id:3},
    {title:"Como hacer a la monalisa",url:"https://youtube.canalarte",course_id:4},
    {title:"Marketing basico",url:"https://youtube.canalmarketing",course_id:5},
];

const categories =[
    {name:"informatica",course_id:1},
    {name:"culinarias",course_id:2},
    {name:"arte",course_id:4},
    {name:"negocios",course_id:5},
]

db.sync({force:true})
  .then(() =>{
    console.log("Sincronizando informacion");
      users.forEach((user) => Users.create(user)); 
    setTimeout(()=> {
      courses.forEach((course)=> Courses.create(course));
    },100)
    setTimeout(() => {
      usersCourses.forEach((uc) => UsersCourses.create(uc));
    },200);
    setTimeout(()=>{
      videos.forEach((video) => Videos.create(video));
    },300);
    setTimeout(()=>{
      categories.forEach((category) => Categories.create(category));
    },400);
  })
  .catch((error) => console.log(error));