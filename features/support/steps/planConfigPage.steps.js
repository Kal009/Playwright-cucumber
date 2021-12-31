const {Given , When , Then} = require('@cucumber/cucumber');
const planConfigPage = require('../page-objects/planConfigPage')



When('I select a plan on the plan configurator page', async function () {
    await planConfigPage.SelectPlan(1) 
  });

When('I click continue on the plan configurator page', async function () {
    await planConfigPage.clickGoToBasket()
  });