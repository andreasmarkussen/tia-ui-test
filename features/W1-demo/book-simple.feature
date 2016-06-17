Feature: Booking of an airline ticket
  

  Scenario: 
   Given I am at the first page of the W1 Demosite
   Given I am at the second page of the W1 Demosite
   When I book a flight from CPH to LON
   Then the price should be 200 EUR