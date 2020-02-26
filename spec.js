browser.waitForAngularEnabled(false);      

describe('Protractor Demo App', function() {
    it('should have a title', function() {
      // browser.waitForAngularEnabled(false);      
      browser.get('https://www.we.org/en-CA/');
      expect(browser.getTitle()).toEqual('WE.org | Making Doing Good, Doable | Join the WE Movement');
    });
  });