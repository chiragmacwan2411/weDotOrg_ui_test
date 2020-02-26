var PropertiesReader = require('properties-reader');
var confProperties = PropertiesReader('./features/properties/conf.properties');

exports.config = {
    // seleniumAddress: confProperties.get('seleniumAddress'),
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    getPageTimeout: confProperties.get('PageTimeout'),
    allScriptsTimeout: confProperties.get('ScriptTimeout'),
    specs: [confProperties.get('PathToFeatures')],
    
    // multiCapabilities:[
    //   {browserName: 'chrome'},{browserName: 'firefox'}
    // ],
    // maxsession: 1,
    capabilities: {
      browserName: 'chrome'
      // browserName: 'firefox'
    },

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        reportName: confProperties.get('reportName'),
        pageTitle: confProperties.get('pageTitle'),
        customData:{
          title:confProperties.get('ReportTitle'),
          data:[
            {label:confProperties.get('label_one'),value:confProperties.get('value_one')},
            {label:confProperties.get('label_two'),value:confProperties.get('value_two')},
            {label:confProperties.get('label_three'),value:confProperties.get('value_three')}
          ],
        },
        displayDuration:true,
      }
  }],
    cucumberOpts: {
      tags: false,
      format:confProperties.get('PathTojsonReport'),
      require: [
        confProperties.get('PathToSteps')
      ]
    }
  }