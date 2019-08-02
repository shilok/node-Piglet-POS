const winston = require('winston')
const expressWinston = require('express-winston');

const config = {
  levels: {
    critical: 0,
    warn: 1,
    error: 2,
    info: 3,
    debug: 4,

  },
  colors: {
    error: 'red',
    debug: 'blue',
    critical: 'yellow',
    warn: 'grey',
    info: 'green',
  }
};

const loggerInfo = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.simple()
  ),
  levels: config.levels,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ name: 'critical', filename: 'logs/' + 'critical.log', level: 'critical', level: 'warn'}),
    new winston.transports.File({ name: 'error', filename: 'logs/' + 'error.log', level: 'error' }),
    new winston.transports.File({ name: 'info', filename: 'logs/' + 'info.log', level: 'info' }),
    new winston.transports.File({ name: 'combine', filename: 'logs/' + 'combine.log' })
  ]
});


winston.addColors(config.colors)


module.exports.info = expressWinston.logger({
  winstonInstance: loggerInfo,
  meta: true,
  msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}}",
  statusLevels: false, // default value
  level: function (req, res) {
    var level = "";
    if (res.statusCode >= 100) { level = "info"; }
    if (res.statusCode >= 400) { level = "warn"; }
    if (res.statusCode >= 500) { level = "error"; }
    if (res.statusCode == 401 || res.statusCode == 403) { level = "critical"; }
    if (req.path === "/v1" && level === "info") { level = "warn"; }
    console.log("============" + level + "=================" + res.statusCode)
    return level;
  },
  expressFormat: true,
  colorize: true
});




const loggerError = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.simple()
  ),
  levels: config.levels,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/' + 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'logs/' + 'critical.log', level: 'critical', level: 'warn'}),
    // new winston.transports.File({ filename: 'logs/' + 'info.log', level: 'info'}),
    // new winston.transports.File({ filename: 'logs/' + 'combine.log'})
  ]
});

module.exports.errorWin = expressWinston.errorLogger({
  winstonInstance: loggerError,
  meta: true,
  msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}}",
  // statusLevels: false, // default value
  level: "error",
  expressFormat: true,
  colorize: true
});

