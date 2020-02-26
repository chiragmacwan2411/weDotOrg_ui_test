require('./hooks');
var {Given, When, Then } = require('cucumber')

var chai = require('chai');
var ChaiAsPromised = require('chai-as-promised');

browser.waitForAngularEnabled(false); 
browser.manage().timeouts().pageLoadTimeout(40000);
browser.manage().timeouts().implicitlyWait(25000);

chai.use(ChaiAsPromised);
var expect = chai.expect;


//FEATURE Home Page to Shop Page
var Homepage = require('../PageObjectModels/HomePage.js')

 //Scenario 1 HomePage
  Given(/^User navigates to WE Home page "([^"]*)"$/, {timeout: 2 * 5000},(HomePageUrl, callback) => {
    callback(null, Homepage.GoToHomePage(HomePageUrl));
  });
  Then(/^user verifies the title of the home page as "([^"]*)"$/, {timeout: 2 * 5000},(HomePageTitle) => {
    return expect(Homepage.GetTitle()).to.eventually.equal(HomePageTitle);
  });

//Scenario 2 Land on SHOP Page
  When(/^user clicks on SHOP button$/, {timeout: 2 * 5000},(callback) => {
    callback(null, Homepage.GoToSHOPPage());
  });
  Then(/^user should successfully land on SHOP page and verify page title as "([^"]*)"$/, {timeout: 2 * 5000}, (shopPageTitle) => {
    return expect(Homepage.GetTitle()).to.eventually.equal(shopPageTitle);
  });



// //FEATURE Shopping Cart  
var shopPage = require('../PageObjectModels/shoppingCart.js');

// //Scenario 1 Check shopping cart
  Given(/^User goes to ShopAll section$/, {timeout: 2 * 5000},(callback) => {
    callback(null, shopPage.GoToShopAll());
  });
  When(/^user goes to shopping cart$/, {timeout: 2 * 5000}, () => {
    return shopPage.GoToShoppingCart();
  });
  Then(/^user verifies the cart message as "([^"]*)"$/, {timeout: 2 * 5000}, (CartMsg, callback) => {
    callback(null, expect(shopPage.EmptyCartMsg()).to.eventually.equal(CartMsg));
  });
  
// // Scenario 2: Add items to Shopping cart
  When(/^user adds items to shopping cart by clicking Add to Cart button on each item$/, {timeout: 2 * 15000}, (callback) => {
    callback(null, shopPage.AddItemsToCart());
  });
  Then(/^user verifies that added items appear correctly into the shopping cart$/, {timeout: 2 * 10000},(callback) => {
    callback(null, shopPage.CheckAddedItems());
  });

// //Scenario 3 Edit items in the shopping cart and verify total price
  Then(/^user edits items into shopping cart by removing and changing quantities of items$/, {timeout: 2 * 10000},(callback) => {
    callback(null, shopPage.EditItems());
  });