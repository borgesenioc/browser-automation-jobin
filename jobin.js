const puppeteer = require('puppeteer-extra');
const proxyPlugin = require('puppeteer-extra-plugin-proxy');
const { accounts } = require('./config/accounts.json');
const { interval, maxInvitations, proxy } = require('./config/config.json');
const errorHandler = require('./error-handler');

// Use proxy for Puppeteer if needed
puppeteer.use(proxyPlugin({
  address: proxy.address,
  port: proxy.port,
  credentials: {
    username: proxy.username,
    password: proxy.password
  }
}));

async function runJobinTasks() {
  // Path to Chrome and user profile
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'; // Chrome executable path from open_jobin.sh
  const profilePath = '/Users/YourUsername/Library/Application Support/Google/Chrome/Profile 1'; // Replace with the actual path to your Chrome profile

  const browser = await puppeteer.launch({
    headless: false, // Set to false to open the Chrome window
    executablePath: chromePath, // Use the Chrome executable path from the shell script
    userDataDir: profilePath // Use Chrome profile directory
  });

  for (let account of accounts) {
    const page = await browser.newPage();
    await page.goto('https://my.jobin.cloud'); // URL from the shell script

    // Handle the "Restore Pages?" prompt by clicking "Cancel"
    try {
      // Wait for the "Restore Pages?" pop-up to appear and click "Cancel"
      await page.waitForSelector('button[aria-label="Cancel"]', { timeout: 5000 });
      await page.click('button[aria-label="Cancel"]');
      console.log("Clicked 'Cancel' on Restore Pages dialog.");
    } catch (err) {
      console.log('No "Restore Pages" prompt.');
    }

    // Additional tasks for Profile 1 can go here...

  }

  await browser.close();
}

// Run the function
runJobinTasks();
