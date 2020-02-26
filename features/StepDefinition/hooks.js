var { BeforeAll, AfterAll, Before, After } =  require('cucumber')

After((scenarioResult)=>{
    let self = this;
    if (scenarioResult.result.status === 'failed'){
    return browser.takeScreenshot()
    .then(function(screenshot){
        const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/,''),'base64');
        self.attach(decodedImage,'image/png');
    });
}
});