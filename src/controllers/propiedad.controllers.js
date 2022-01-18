const {search,addProp, remove} = require("../models/propiedades");
const propControllers={

};

propControllers.read=(req,res)=>{
    search((result)=>{
        res.send(result);
    });
};

propControllers.add=(req,res)=>{
    addProp(req.body,()=>{
        res.send("se ha añadido de forma exitosa");
    })
}

propControllers.update=(req,res)=>{
    res.send("se ha actualizado los valores de la propiedad");
}

propControllers.remove=(req,res)=>{
    remove(req.body.id,()=>{
        res.send("se ha eliminado el objeto de forma exitosa");
    });
};

module.exports=propControllers;