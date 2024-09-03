const cron = require('node-cron');
const { exec } = require('child_process');

// Function to open Chrome browser
function openChrome() {
  exec('start chrome', (err) => {
    if (err) {
      console.error(`Error opening Chrome: ${err}`);
    } else {
      console.log('Chrome opened successfully');
    }
  });
}

// Schedule the task to run every day at 9 AM New York time
function start() {
  cron.schedule('0 9 * * *', () => {
    console.log('Opening Chrome at 9 AM New York time');
    openChrome();
  }, {
    timezone: "America/New_York"
  });
}

module.exports = { start };

