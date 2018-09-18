const AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    SELENIUM_PROMISE_MANAGER: 0,
    directConnect: false,
    framework: 'jasmine',
    allScriptsTimeout: 45000,
    getPageTimeout: 30000,
    specs: ['../test_specs/*.js'],
    capabilities: {
        browserName: "firefox"
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async () => {
            let screenshotFile = await browser.takeScreenshot();

            await allure.createAttachment("Screenshot", () => {
                return new Buffer(screenshotFile, "base64");
            }, 'image/png')();
        });
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {

    }
};