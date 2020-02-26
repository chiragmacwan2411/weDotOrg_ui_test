var PropertiesReader = require('properties-reader');
var ShopElmsProperties = PropertiesReader('./features/properties/Elms.properties');

module.exports = {
    ShopPageElements:{
        shopAllBtn: element(by.xpath(ShopElmsProperties.get('ShopAllBtn_xpath'))),
        shoppingCartBtn:element.all(by.css(ShopElmsProperties.get('ShoppingCartBtn_css'))).first(),
        emptyCartMsg:element(by.xpath(ShopElmsProperties.get('emptyCartMsg_xpath'))),
        closeCart:element(by.css(ShopElmsProperties.get('closeCartBtn_css'))),
        addToCartBtns: element.all(by.css(ShopElmsProperties.get('addToCartBtns_css'))),
        cartItems: element.all(by.css(ShopElmsProperties.get('cartItems_css'))),
        removeItems: element.all(by.css(ShopElmsProperties.get('removeItems_css'))),
        increaseQty: element.all(by.css(ShopElmsProperties.get('increaseQty_css')))
    },
    GoToShopAll: function(){
        this.ShopPageElements.shopAllBtn.click();
    },
    GoToShoppingCart:function(){
        browser.sleep(3000);
        return this.ShopPageElements.shoppingCartBtn.click();
    },
    EmptyCartMsg: function(){
        browser.sleep(3000);
        return this.ShopPageElements.emptyCartMsg.getText();
    },
    AddItemsToCart: function(){
        browser.sleep(2000);
        this.ShopPageElements.closeCart.click();
        var i;
        var numOfItems = Math.floor(Math.random() * 5) + 1;
        console.log("Items to be added to the cart: " + (numOfItems+1));
        for (i = 0; i <= numOfItems; i++){
            browser.sleep(2000);
            this.ShopPageElements.addToCartBtns.get(i).click();
            browser.sleep(2000);
            this.ShopPageElements.closeCart.click();
        }
        return browser.sleep(1000);
    },
    CheckAddedItems: function(){
        browser.sleep(3000);
        this.GoToShoppingCart();
        return this.ShopPageElements.cartItems.count().then(function(count){console.log("Added items to the cart: "+count)})
    },
    EditItems: function(){
        browser.sleep(2000);
        this.ShopPageElements.removeItems.first().click();
        browser.sleep(2000);
        return this.ShopPageElements.increaseQty.first().click();
    }
};