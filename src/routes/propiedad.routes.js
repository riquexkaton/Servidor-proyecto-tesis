const {Router} = require("express");
const route= Router();
const path= require("path");
const {read,add,update,remove}= require("../controllers/propiedad.controllers");

route.get("/furniture",read);

route.post("/furniture/upload",add);

route.put("/furniture/update",update);

route.delete("/furniture/remove", remove);

module.exports= route;



