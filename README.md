# weDotOrg_ui_test
we.org ui automation

### npm dependencies:
* Powershell [https://www.npmjs.com/package/powershell]
* protractor-cucumber-framewor [https://www.npmjs.com/package/protractor-cucumber-framework]
* protractor-multiple-cucumber-html-reporter-plugin [https://www.npmjs.com/package/protractor-multiple-cucumber-html-reporter-plugin]
* chai [https://www.npmjs.com/package/chai]
* chai-as-promised [https://www.npmjs.com/package/chai-as-promised]
* cucumber [https://www.npmjs.com/package/cucumber]
* properties-reader [https://www.npmjs.com/package/properties-reader]

## Script running command : npm run testwe 
test report [https://github.com/chiragmacwan2411/weDotOrg_ui_test/blob/master/tmp/report/index.html]

### Script flow
* cucumber features and scenarios
    * Step definitions (*.js files)
        * page objects for each page

### properties and configuration
* package.json - Project configuration 
* conf.js - script configuration
* properties - page elements

#### webdriver-manager start not required, direct connect enabled
