var angularHomepage = require('./AngularHomepage');
describe('angularjs homepage', function() {
  it('should greet the named user', async function() {
    await angularHomepage.get();

    await angularHomepage.setName('Julie');

    expect(await angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });
});