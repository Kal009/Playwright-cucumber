


describe('this is just ', () => {
    it("Test your amazing feature", async () => {
        await page.goto('https://www.youtube.com/')
        await reporter
            .description("Feature should work cool")
            .story("BOND-007");

        await reporter.startStep("Check it's fancy");
        // expect that it's fancy
        await reporter.endStep();

        await reporter.startStep("Check it's cool");
        // expect that it's cool
        await reporter.endStep();

        const screenshotBuffer = await page.screenshot();
        await reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
    });
})