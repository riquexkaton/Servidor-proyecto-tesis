const userControllers = {};
const { save, read, login } = require("../models/users");

userControllers.registrarUsuario = async (req, res) => {

    try {
        await save(req.body, (data) => {
            if (data.isUser) {
                res.send(data);
            }
            else {
                res.send(data);
            }
        });
    }
    catch (err) {
        res.status(501).send("existe un usuario");
    }
}


userControllers.readUsers = async (req, res) => {

    await read((result) => {

        if (result.isError) {
            res.status(500).send("error");
        }
        else {
            res.send(result.data);
        }
    });

}

userControllers.login = async (req, res) => {
    await login(req.body,(data) => {
        if(data.isError)
        {
            res.send("ha ocurrrido un error");
        }
        else
        {
            res.json(data);
        }
    });
}

userControllers.perfilUsuario = (req, res) => {
    res.send("este es el perfil de un usuario en especifico");
}

module.exports = userControllers;