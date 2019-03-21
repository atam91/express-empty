const ENVIRONMENT = {
    TZ: 'Europe/Moscow'
};

const logPath = filename => `logs/${filename}.log`;


module.exports = {
    apps: [
        {
            watch: [ 'app' ],
            name: 'express-empty',
            script: 'bin/www',
            log_file: logPath('express-empty-log'),
            out_file: logPath('express-empty-out'),
            error_file: logPath('express-empty-error'),
            env: ENVIRONMENT
        }
    ]
};