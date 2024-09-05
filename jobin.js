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
  const browser = await puppeteer.launch({ headless: true });
  for (let account of accounts) {
    const page = await browser.newPage();
    await page.goto('https://my.jobin.cloud');

    // Handle the "Restore Pages?" prompt by clicking "Cancel"
    try {
      // Wait for the "Restore Pages?" pop-up to appear and click "Cancel"
      await page.waitForSelector('button[aria-label="Cancel"]', { timeout: 5000 });
      await page.click('button[aria-label="Cancel"]');
      console.log("Clicked 'Cancel' on Restore Pages dialog.");
    } catch (err)
