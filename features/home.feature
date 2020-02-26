Feature: Home page to Shop page

   In order to go to shop page
   user needs to go to home page of When and verify the title of the page
   then user needs to go to shop page by clicking SHOP button
   then user needs to verify the title of the shop page correctly

   Scenario: HomePage
      Given User navigates to WE Home page "https://www.we.org/en-CA/"
      Then user verifies the title of the home page as "WE.org | Making Doing Good, Doable | Join the WE Movement"

   Scenario: Land on SHOP Page
      When user clicks on SHOP button
      Then user should successfully land on SHOP page and verify page title as "Socially Conscious, Handmade Products | ME to WE"