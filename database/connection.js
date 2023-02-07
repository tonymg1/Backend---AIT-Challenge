const mongoose = require("mongoose");

const conection = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect("mongodb+srv://prueba:funcionaya111@cluster0.qelxiho.mongodb.net/gifApp?retryWrites=true&w=majority");

        console.log("Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos")
    }
}

module.exports = {
    conection
}


