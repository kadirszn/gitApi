Feature: Validation Of New order using Scenario Outline

  Scenario Outline: New Order Validation
    Given the demoUser enters username "Tester"
    When the demoUser enters password "test"
    Then the user enter product info "<ProductName>" and "<quantity>"
    And the user enter adress info "<Name>" , "<Address>" , "<city>" , "<state>" , "<zipcode>"
    * the user enter payment info "<Card Type>" , "<Card Number>" , "<expDate>"
    Then the user validate success message
    And the user validate new order details "<ProductName>" , "<quantity>" , "<Name>" , "<Address>"  , "<city>" , "<state>" , "<zipcode>", "<Card Type>" , "<Card Number>" , "<expDate>"
    Examples:
      | ProductName | quantity | Name    | Address      | city        | state      | zipcode | Card Type        | Card Number      | expDate |
      | MyMoney     | 10       | David   | 2200 E devon | Des Plaines | Illinois   | 60018   | Visa             | 4444333322221111 | 05/24   |
      | FamilyAlbum | 5        | John    | 2222 E devon | Chicago     | Arizona    | 50456   | MasterCard       | 4444333322226666 | 06/26   |
      | ScreenSaver | 3        | Jessica | 3445 E river | Los Angeles | California | 45679   | American Express | 4444333322228888 | 08/22   |


