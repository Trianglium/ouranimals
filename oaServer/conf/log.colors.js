import chalk from 'chalk';

const warning = chalk.hex('#FFEB33'), // yellow
    info = chalk.hex('#00A7CC'), // blue
    debug = chalk.hex('#6D33FF'), // purple
    error = chalk.hex('#FE8A60'), // orange
    fatal = chalk.hex('#D60088'), // dark pink
    success = chalk.hex('#00CCB4'); // green tourqouise

console.log(error('Error!'));
console.log(warning('Warning!'));
module.exports = {
  debug: chalk.hex('#6D33FF'),
  info: chalk.hex('#00A7CC'),
  success: chalk.hex('#00CCB4'),
  warn: chalk.hex('#FFEB33'),
  error: chalk.hex('#FE8A60'),
  fatal: chalk.hex('#D60088'),
  message: chalk.hex('#3F00FF')
};
