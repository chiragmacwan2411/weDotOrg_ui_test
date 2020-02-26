var PropertiesReader = require('properties-reader');
var HomeElmsProperties = PropertiesReader('./features/properties/Elms.properties');

module.exports = {
    HomePageElements:{
        SHOPBtn:element(by.xpath(HomeElmsProperties.get('SHOPBtn_xpath')))
    },
    GoToHomePage:function(HomePage){
        return browser.get(HomePage);
    },
    GetTitle:function(){
        browser.sleep(3000);
        browser.driver.manage().window().maximize();
        return browser.getTitle();
    },
    GoToSHOPPage: function(){
        this.HomePageElements.SHOPBtn.click();
    }
};