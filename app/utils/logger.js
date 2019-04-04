const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});


const logger = createLogger({
    format: combine(
        timestamp(),
        logFormat
    ),

    transports: [
        new transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: true
        }),

        new transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});



module.exports = logger;

module.exports.stream = {
    write: function(message, encoding){
        logger.info(
            message.replace(/\[\d+m|\n/g, '')
        );
    }
};