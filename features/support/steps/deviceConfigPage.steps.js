const {Given , When , Then} = require('@cucumber/cucumber');
let deviceConfigPage = require('../page-objects/deviceConfigPage');


When('I click the next button on the configurator page', async() => {
    await deviceConfigPage.clickAddToBasket()
  });