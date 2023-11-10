const express= require("express");
const path=require("path");
const hbs=require('hbs');

const app=express();
const port=3000;
//public static path
 const staticPath = path.join(__dirname, "../public");
const partial_path= path.join(__dirname, "../templates/partials");
const template_path=path.join(__dirname, "../templates/views");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path)

 app.use(express.static(staticPath));


//ROUTING
app.get("/",(req,res)=>{
    res.render('index.hbs');
})


app.get("/about",(req,res)=>{
    res.render('about');
})


app.get("/weather",(req,res)=>{
    res.render('weather');
})


app.get("*",(req,res)=>{
    res.render('404error', {
        errormsg: "Opps Page Not Found"
    });
})

app.listen(port,()=>{
    console.log(`Welcome to the nodemon at ${port}.`)
})