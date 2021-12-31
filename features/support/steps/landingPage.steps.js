const {Given , When , Then} = require('@cucumber/cucumber');
let landingPage = require('../page-objects/landingPage');

Given('I start the digital mobile {string} journey', async(string)=>{
  await  landingPage.navigateTo('https://pages-apps-mobile-tdm.cf.dev-paas.bskyb.com/shop/mobile/')
    console.log('This is Example:' + string)
})

When('I select an in stock 5G handset', async()=>{
 const title =  await  page.title()
   console.log(" Title is : " + title)
   // await landingPage.acceptSkyCookies();
   const sessionId =  await landingPage.getSessionID()
   const interaction = await landingPage.getInteractionID(sessionId, null)
   const scIDs = await landingPage.getScIDs()
   const products = await landingPage.getProductsInStock(scIDs,interaction)
   await landingPage.selectCard(products[0].scid);
})












