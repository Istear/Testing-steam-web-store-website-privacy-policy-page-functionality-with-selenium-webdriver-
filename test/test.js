const { Driver } = require('selenium-webdriver/chrome');
const  mainPage = require('../pageobjects/mainPage');
// import chai from 'assert';
// import basePage from '../pageobjects/basepage';
// import mainPage from '../pageobjects/mainPage';

const MainPage = new mainPage();
let title = 'https://store.steampowered.com/';

MainPage.goToUrl(title);
MainPage.navigatePrivacyPolicy();




// describe('Privacy policy', function(){
//     it('navigate',function(){
//         let mainUrl = 'https://store.steampowered.com';
//         //mainPage.goToUrl(mainUrl);
//         mainPage.navigatePrivacyPolicy(mainUrl);
//     })
// })