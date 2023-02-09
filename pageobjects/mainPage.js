const {Builder, Key, By, until} = require('selenium-webdriver');
var basePage = require('../pageobjects/basepage.js');
var webdriver = require ('selenium-webdriver');

class mainPage extends basePage{
    navigatePrivacyPolicy(){
        driver.manage().window().maximize();
        //Scroll down till the bottom of the page
        let element = driver.findElement(By.linkText('Privacy Policy'));
        driver.executeScript("arguments[0].scrollIntoView()", element);
        driver.sleep(300);
        element.click();
        driver.switchTo().window(mainWindow)

        driver.wait(until.elementsLocated(By.className('blockbg')),10000);

        // driver.manage().setTimeout({implicit:10000,pageLoad:1000});
        // driver.executeScript('arguments[0].scrollIntoView()');
        // driver.findElement(By.linkText('Privacy Policy')).click;
        setTimeout(function(){
            driver.quit();
        },10000); 
    }
}


module.exports = mainPage;