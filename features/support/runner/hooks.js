const { BeforeAll, AfterAll, Before, After, AfterStep, BeforeStep, Status, World } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require("playwright");
var { setDefaultTimeout } = require('@cucumber/cucumber');


const fs = require('fs');
require('dotenv').config();

setDefaultTimeout(30000)

BeforeAll(async function () {
    const browserName = process.env.BROWSER || 'firefox'
    global.browser = await { chromium, webkit, firefox }[browserName].launch({
        headless: false,
        slowMo: 50,
    })
})

AfterAll(async function () {
    await global.browser.close();
})

Before(async function () {
    global.context = await global.browser.newContext({
        viewport: {
            width: 1660,
            height: 980,
        },
        recordVideo: {
            dir: './videos/'
        }
    });
    global.page = await global.context.newPage();
})

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await page.screenshot({ path: './screenshots/' + scenario.pickle.name + '.png', fullPage: true })
        this.attach(screenshot, 'image/png')

        console.log('[ FAILED ] Scenario : ' + scenario.pickle.name)
        await page.waitForTimeout(2000)

        const videoName = await page.video().path();
        fs.rename(videoName, 'videos/' + scenario.pickle.name + '.webm', (async () => await console.log('Video Taken')))

    }
    await global.page.close();
})

BeforeStep(async function () {
   // console.log('i am before the steps')
})

AfterStep(async function () {
  //  console.log('i am after the steps')
})