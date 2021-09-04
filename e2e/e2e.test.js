import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('should toggle popup on click', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 500,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should toggle popup', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.form');
    const btn = await form.$('.btn');
    btn.click();
    await page.waitFor('.popup');
    btn.click();
    await page.waitFor(5000);
  });
});
