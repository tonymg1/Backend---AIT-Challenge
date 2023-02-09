'use strict';

const { conection } = require('./database/connection');
const server = require('./src/server');
const config = require('./src/config/config');

const startServer = async () => {
    try {
        await conection(config.logger.info('MongoDB connected'));
        server.listen(config.app.port, () => {
            config.logger.info(`Server is running in port ${config.app.port}`);
        });
    } catch (error) {
        console.log('Someting went wrong, server crashed!');
        console.log(error);
    }
};

startServer();
