const ENVIRONMENT = {
    TZ: 'Europe/Moscow'
};

const logPath = filename => `logs/${filename}.log`;
const LOG_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS Z';


module.exports = {
    apps: [
        {
            watch: [ 'app' ],
            name: 'express-empty',
            script: 'bin/www',
            log_file: logPath('express-empty-log'),
            out_file: logPath('express-empty-out'),
            error_file: logPath('express-empty-error'),
            ///log_date_format: LOG_DATE_FORMAT,
            env: ENVIRONMENT
        }
    ]
};