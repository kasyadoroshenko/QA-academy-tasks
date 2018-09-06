describe('Protractor Demo App', function(){
    it('should have a title', function(){
        browser.get('http://juliemr.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});
