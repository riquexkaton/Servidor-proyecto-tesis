const res = require("express/lib/response");
const mysql = require("../database");
const bcrypt = require("bcryptjs");
const userModels = {

};

userModels.save = async ({ nombre, password, email, telefono, backup }, callback) => {
    let insertquery = `INSERT INTO usuarios (nombre,contraseña,email,telefono,id_user,backup) VALUES (?,?,?,?,?,?)`;
    let saltRounds = 10;
    let hash = await bcrypt.hash(password, saltRounds);
    let insertQueryFormat = mysql.format(insertquery, [nombre, hash, email, telefono, null, backup]);
    let query2 = `SELECT * from usuarios where usuarios.email='${email}'`;
    mysql.query(query2, (err, result, fields) => {
        if (err) {
            throw err
        }
        else if (result.length > 0) {
            callback({ isUser: true });
        }
        else {
            mysql.query(insertQueryFormat, (err, data) => {
                if (err) {
                    throw err;
                }
                else {

                    callback({ isUser: false });
                }
            });
        }
    });

}


userModels.read = (callback) => {
    let query = `SELECT * from usuarios`;
    mysql.query(query, (err, result) => {
        if (err) {
            callback({ isError: true })
        }
        else {
            callback({ isError: false, data: result });
        }
    })
}


userModels.login = ({ email, password }, callback) => {
    let searchQuery = `select * from usuarios where usuarios.email='${email}'`;
    mysql.query(searchQuery, async (err, result) => {
        if (err) {
            callback({ isError: true });
        }
        if (result.length == 1) {
           let hashPassword = result[0].contraseña;
            let checkCompare = await bcrypt.compare(password, hashPassword);
            if (!checkCompare) {
                callback({ message: "tu contraseña o correo es invalido", isError: false });
            }
            else {
                callback({ message: "ha ingresado de forma exitosa", isError: false });
            }
        }
        else
        {
            callback({message:"el usuario no esta registrado", isError:false});
        }
    })

};


module.exports = userModels;
