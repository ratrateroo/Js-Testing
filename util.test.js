const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Mark', 31);
    expect(text).toBe('Mark (31 years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Mark', 31);
    expect(text).toBe('Mark (31 years old)');
});

test('should create and element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        //slowMo: 80,
        //args: ['--window-size=1366, 768']
    });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Mark');
    await page.click('input#age');
    await page.type('input#age', '31');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Mark (31 years old)');
}, 20000);