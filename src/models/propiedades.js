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

propModels.update=({nombre,ubicacion,fecha,mts2,numHabitaciones,numBaños,isCocina,isSala,descripcion,precio,tipoVivienda,tipoInmobiliaria,isEstacionamiento,fotos,idVivienda},callback)=>{

    let insertquery = `UPDATE inmobiliaria set 
    nombre='${nombre}',
    ubicacion='${ubicacion}',
    fecha='${fecha}',
    metros_cuadrado='${mts2}',
    num_habitaciones='${numHabitaciones}',
    num_baños='${numBaños}',
    isCocina='${isCocina}',
    isSala='${isSala}',
    descripcion='${descripcion}',
    precio='${precio}',
    tipo_vivienda='${tipoVivienda}',
    tipo_inmobiliaria='${tipoInmobiliaria}',
    isEstacionamiento='${isEstacionamiento}',
    fotos='${fotos}'
    where inmobiliaria.id_vivienda=${idVivienda}`;

    let insertQueryFormat = mysql.format(insertquery, [nombre,ubicacion,fecha,mts2,numHabitaciones,numBaños,isCocina,isSala,descripcion,precio,tipoVivienda,tipoInmobiliaria,isEstacionamiento,fotos]);

    mysql.query(insertQueryFormat,(err,result)=>{
        if(err)
        {
            throw err;
        }
        else 
        {
            callback(result);
        }
    });
}

module.exports= propModels;