const {Router} = require("express");
const route= Router();
const path= require("path");
const {registrarUsuario, login, readUsers,perfilUsuario} = require("../controllers/user.controllers");

//Ruta para el registro de usuarios
route.post("/register",registrarUsuario);


//ruta para el login de los usuarios
route.post("/login",login);


//ruta para obtener los usuarios
route.get("/users",readUsers);


//ruta para buscar los datos de un usuario en especifico
route.get("/user/:id",perfilUsuario);

module.exports= route;