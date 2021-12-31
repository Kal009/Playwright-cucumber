const testContext = require('../../helper/testContext')
const session = require('../../../apis/session')
const contextualCatalogue = require('../../../apis/contextualCatalogue')



// Selectors
const heroTitle = 'h2 [data-test-id=toolkit-basic-markdown]'
const productCard = '[data-test-id=mobile-product-selection-MDEVICE_APPLE_IPHONE13PRO_128GB_SILVER]'
const planTab = '[href="/shop/mobile/plans"]'
const phoneTab = '[data-test-id="phones-tab-button"]'
const productCards = '[data-test-id*=mobile-product-selection]'




module.exports = {
    navigateTo: async (url) => page.goto(url),

    acceptSkyCookies: async function () {
        const frame = page.frameLocator('[id*=sp_message_iframe]').locator('[title=Agree]');
        if (frame != null) {
            await frame.click();
            console.log('Sky Mobile Cookie accepted')
        } else {
            console.log('Sky Mobile Cookie is not displayed ')
        }
    },

    selectCard: async function (deviceName) {
        await page.$eval(heroTitle, element => element.textContent);
        let product = '[data-test-id=mobile-product-selection-' + deviceName + ']'
        await page.waitForSelector(product);
        await page.click(product)
    },

    getSessionID: async function () {
        await page.click(planTab);
        const cookies = await context.cookies()
        const sessionId = await cookies.filter(cookie => cookie.name == 'sky-session-id')[0].value;
        await testContext.setVar(sessionId)
        return sessionId
    },

    getInteractionID: async function (getCookiee, sessionKey) {
        return await session.getInteraction(getCookiee, sessionKey)
    },

    getProducts: async function (scIDs, intID) {
        return await contextualCatalogue.getProducts(scIDs, intID)
    },

    getProductsInStock: async function (scIDs, intID) {
        return await contextualCatalogue.getInStockProducts(scIDs, intID)
    },


    getScIDs: async function () {
        await page.waitForTimeout(3000)
        await page.click(phoneTab)
        await page.waitForSelector(productCard)
        const eleHandle = await page.$$(productCards)
        const scIDs = []
        for (let i = 0; i < eleHandle.length; i++) {
            scIDs[i] = (await eleHandle[i].getAttribute('data-test-id')).replace('mobile-product-selection-', '');
        }
        return await scIDs;
    }

}