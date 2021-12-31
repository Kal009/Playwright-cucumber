const planHeading = '[data-test-id=selection-heading]'
const goToBasket = '[data-test-id=toolkit-clickable-text]'


module.exports = {
    getPlanName: async function(card){
        await page.waitForSelector(planHeading, {timeout: 5000})
        const planElementHandle = await page.$$(planHeading)
        return await planElementHandle[card].innerText()
    },

    SelectPlan: async function(card){
        const planCard = '[data-test-id*=mobile-product-selection-MOBILE_DATA_'+ await this.getPlanName(card) + ']'
        await page.click(planCard)
    },

    clickGoToBasket: async function(){
        await page.click(goToBasket)
        await page.waitForTimeout(5000)
    }
}