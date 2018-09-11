// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: 0,
    allScriptsTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1
    },

    // restartBrowserBetweenTests: true,

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        demo: [
            './tests/demo_test_1.js',
            './tests/demo_test_2.js',
            //'./tests/demo_test_3.js',
        ]
    },

    framework: 'jasmine2',

    // add reporting
    onPrepare: function () {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true // Use colors in the command line report.
    }
}