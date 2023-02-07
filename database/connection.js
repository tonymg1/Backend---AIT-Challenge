const mongoose = require('mongoose');
const config = require('../src/config/config');

const conection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(config.db.uri);

        console.log('Conectado correctamente a la base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('No se ha podido conectar a la base de datos');
    }
};

module.exports = {
    conection
};
