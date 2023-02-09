var webdriver = require('selenium-webdriver');
require('chromedriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
//driver.manage().setTimeouts({implicit: (10000)});

class basePage{
    constructor(){
        global.driver =driver;
    }

    goToUrl(theUrl){
          driver.get(theUrl);
    }
}

module.exports = basePage;