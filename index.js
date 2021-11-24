const log4js = require('log4js');

let logger = log4js.getLogger()
logger.level='debug'; //"production"
logger.info('Inicia el servidor')

function sumar(x,y) {
    return x+y; 
}

module.exports = sumar
