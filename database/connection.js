const mongoose = require("mongoose");
const config = require("../src/config/config")

const conection = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb+srv://prueba:funciona111@cluster0.pbh1sds.mongodb.net/test?retryWrites=true&w=majority");

        console.log("Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos")
    }
}

module.exports = {
    conection
}


