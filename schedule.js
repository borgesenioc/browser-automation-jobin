const schedule = require('node-schedule');
const { runJobinTasks, manageLicenses, checkErrors, withdrawInvitations } = require('./jobin');

function start() {
  // Example: Run Jobin tasks every hour
  schedule.scheduleJob('0 * * * *', runJobinTasks);
  
  // Example: Manage licenses every 4 hours
  schedule.scheduleJob('0 */4 * * *', manageLicenses);
  
  // Example: Check for errors every 10 minutes
  schedule.scheduleJob('*/10 * * * *', checkErrors);
  
  // Example: Withdraw invitations daily
  schedule.scheduleJob('0 0 * * *', withdrawInvitations);
}

module.exports = { start };
