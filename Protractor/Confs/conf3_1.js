exports.config = {
	SELENIUM_PROMISE_MANAGER: 0,
	directConnect: false,
	framework: 'jasmine',
	allScriptsTimeout: 45000,
	getPageTimeout: 30000,
	specs: ['login-page.js'],
	capabilities: {
		browserName: "firefox"
	},
	seleniumAddress: 'http://localhost:4444/wd/hub'
};