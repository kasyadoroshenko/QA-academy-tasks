var angularHomepage = require('./AngularHomepage');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });
});