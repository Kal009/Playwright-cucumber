const addToBasketCta = '[data-test-id=configurator-totaliser-next]'



module.exports = {
    clickAddToBasket: async function(){
        await page.click(addToBasketCta)
    }
}