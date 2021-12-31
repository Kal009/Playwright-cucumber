const {Given , When , Then} = require('@cucumber/cucumber');

Given('I am on home page', async function () {
   await page.goto('https://www.youtube.com/')
  });

Then('I should not log in sucessfully', async()=>{
    const title = await page.title();
    console.log("Title is : " + title)
})