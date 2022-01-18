const mysql= require("../database");
const propModels={

};

 propModels.search=(callback)=>{
    let query = `SELECT * from inmobiliaria`;
    mysql.query(query,(err,result)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            callback(result);
        }
    })
}

propModels.addProp=({nombre,ubicacion,fecha,mts2,numHabitaciones,numBaños,isCocina,isSala,descripcion,precio,tipoVivienda,tipoInmobiliaria,isEstacionamiento,fotos,idUser},callback)=>{
    let insertquery = `INSERT INTO inmobiliaria (nombre,ubicacion,fecha,metros_cuadrado,num_habitaciones,num_baños,isCocina,isSala,descripcion,precio,tipo_vivienda,tipo_inmobiliaria,isEstacionamiento,fotos,id_vivienda,id_user) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    let insertQueryFormat = mysql.format(insertquery, [nombre,ubicacion,fecha,mts2,numHabitaciones,numBaños,isCocina,isSala,descripcion,precio,tipoVivienda,tipoInmobiliaria,isEstacionamiento,fotos,null,idUser]);

    mysql.query(insertQueryFormat,(err, result)=>{
        if(err){
            throw err;
        }
        else{
            callback();
        }

    })
}

propModels.remove=(id,callback)=>{
    let query= `DELETE FROM inmobiliaria WHERE inmobiliaria.id_vivienda= ${id}`;
    mysql.query(query,(err,result)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            callback();
        }
    });
}

module.exports= propModels;