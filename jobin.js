const puppeteer = require('puppeteer-extra');
const proxyPlugin = require('puppeteer-extra-plugin-proxy');
const errorHandler = require('./error-handler');

let accounts;
try {
  accounts = require('./config/accounts.json');
} catch (error) {
  console.error("Error loading accounts.json. Using fallback account for 'Profile 1'.");
  accounts = [
    {
      "username": "eborges@onfrontiers.com",
      "password": "W753bsx0**"
    }
  ];
}

/* Use proxy for Puppeteer if needed
puppeteer.use(proxyPlugin({
  address: proxy.address,
  port: proxy.port,
  credentials: {
    username: proxy.username,
    password: proxy.password
  }
})); */

async function runJobinTasks() {
  // Path to Chrome and user profile
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'; // Chrome executable path from open_jobin.sh
  const profilePath = '/Users/YourUsername/Library/Application Support/Google/Chrome/Profile 1'; // Replace with the actual path to your Chrome profile

  const browser = await puppeteer.launch({
    headless: false, // Set to false to open the Chrome window
    executablePath: chromePath, // Use the Chrome executable path
    userDataDir: profilePath // Use Chrome profile directory
  });

  for (let account of accounts) {
    const page = await browser.newPage();
    await page.goto('https://my.jobin.cloud');

    try {
      // Wait for the "Restore Pages?" pop-up to appear and click "Cancel"
      await page.waitForSelector('button[aria-label="Cancel"]', { timeout: 5000 });
      await page.click('button[aria-label="Cancel"]');
      console.log("Clicked 'Cancel' on Restore Pages dialog.");
    } catch (err) {
      console.log('No "Restore Pages" prompt.');
    }

    // Log in with account credentials
    await page.type('#email', account.username); // Replace with actual selector for email input
    await page.type('#password', account.password); // Replace with actual selector for password input
    await page.click('#loginButton'); // Replace with the actual selector for the login button

    // Additional tasks can go here...
  }

  await browser.close();
}

// Run the function
runJobinTasks();
