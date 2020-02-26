Feature: Shopping cart

   In order for user to add items to the shopping cart
   user needs to go to shop all section
   when user varifies that the shopping cart is empty
   then user needs to add items one by one into shopping cart by clicking cart icon of each product
   then user should be able to remove the item from the cart or change quantity of an item
   then user checks the total price updation

   Scenario: Check shopping cart
      Given User goes to ShopAll section
      When user goes to shopping cart
      Then user verifies the cart message as "Your Shopping Bag is Empty"
   
   Scenario: Add items to Shopping cart
      When user adds items to shopping cart by clicking Add to Cart button on each item
      Then user verifies that added items appear correctly into the shopping cart
   
   Scenario: Edit items in the shopping cart and verify total price
      Then user edits items into shopping cart by removing and changing quantities of items