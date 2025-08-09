import puppeteer from 'puppeteer';

async function main() {
  // 1) Launch a browser
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // 2) Nawigate to a simple webpage
  await page.goto('https://the-internet.herokuapp.com/', {
    waitUntil: 'domcontentloaded',
  });

  // 3) Read the page title
  const title = await page.title();
  console.log(`[Info] Page title: ${title}`);

  await browser.close();
}

main().catch((err) => {
  console.error(`[ERROR] Unhandled exception: ${err}`);
  process.exit(1);
});
