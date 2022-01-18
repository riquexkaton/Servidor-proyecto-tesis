const dotenv= require("dotenv").config();
const express= require("express");
const cors= require("cors");
const path= require("path")
const app= express();
require("./database");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({
        send:"hola mundo"
    });
});


app.use(require("./routes/user.routes"));
app.use(require("./routes/propiedad.routes"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(process.env.PORT,()=>{
    console.log("Se ha iniciado el servidor");
});