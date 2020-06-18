$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.WebOrder/LoginTest.feature");
formatter.feature({
  "name": "WebOrder Login page Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Page Positive Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate the home page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"techtorial\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"tttt\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Functionality Negative Test 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@negative"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Techtorial\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"tttt\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser validate \"Invalid Login or Password..\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Error Message Validation expected:\u003c...d Login or Password.[.]\u003e but was:\u003c...d Login or Password.[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_validate(LoginPageSteps.java:61)\r\n\tat ✽.the demoUser validate \"Invalid Login or Password..\"(file:///C:/Users/kadir/OneDrive/Desktop/CucumberBatch4/src/test/resources/com.WebOrder/LoginTest.feature:22)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("Login Functionality Negative Test 2is failed");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/NewOrderDataTable.feature");
formatter.feature({
  "name": "Validation of headers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of new order headers",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the new order page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_goes_to_the_new_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the product headers",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_product_headers(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the adress information",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_adress_information(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/NewOrderOutLine.feature");
formatter.feature({
  "name": "Validation Of New order using Scenario Outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enter product info \"\u003cProductName\u003e\" and \"\u003cquantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enter adress info \"\u003cName\u003e\" , \"\u003cAddress\u003e\" , \"\u003ccity\u003e\" , \"\u003cstate\u003e\" , \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user enter payment info \"\u003cCard Type\u003e\" , \"\u003cCard Number\u003e\" , \"\u003cexpDate\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.step({
  "name": "the user validate new order details \"\u003cProductName\u003e\" , \"\u003cquantity\u003e\" , \"\u003cName\u003e\" , \"\u003cAddress\u003e\"  , \"\u003ccity\u003e\" , \"\u003cstate\u003e\" , \"\u003czipcode\u003e\", \"\u003cCard Type\u003e\" , \"\u003cCard Number\u003e\" , \"\u003cexpDate\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName",
        "quantity",
        "Name",
        "Address",
        "city",
        "state",
        "zipcode",
        "Card Type",
        "Card Number",
        "expDate"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "10",
        "David",
        "2200 E devon",
        "Des Plaines",
        "Illinois",
        "60018",
        "Visa",
        "4444333322221111",
        "05/24"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "5",
        "John",
        "2222 E devon",
        "Chicago",
        "Arizona",
        "50456",
        "MasterCard",
        "4444333322226666",
        "06/26"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "3",
        "Jessica",
        "3445 E river",
        "Los Angeles",
        "California",
        "45679",
        "American Express",
        "4444333322228888",
        "08/22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"MyMoney\" and \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter adress info \"David\" , \"2200 E devon\" , \"Des Plaines\" , \"Illinois\" , \"60018\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_adress_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"Visa\" , \"4444333322221111\" , \"05/24\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"MyMoney\" , \"10\" , \"David\" , \"2200 E devon\"  , \"Des Plaines\" , \"Illinois\" , \"60018\", \"Visa\" , \"4444333322221111\" , \"05/24\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c06/1[7]/2020\u003e but was:\u003c06/1[6]/2020\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(NewOrderSteps.java:75)\r\n\tat ✽.the user validate new order details \"MyMoney\" , \"10\" , \"David\" , \"2200 E devon\"  , \"Des Plaines\" , \"Illinois\" , \"60018\", \"Visa\" , \"4444333322221111\" , \"05/24\"(file:///C:/Users/kadir/OneDrive/Desktop/CucumberBatch4/src/test/resources/com.WebOrder/NewOrderOutLine.feature:10)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("New Order Validationis failed");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"FamilyAlbum\" and \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter adress info \"John\" , \"2222 E devon\" , \"Chicago\" , \"Arizona\" , \"50456\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_adress_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"MasterCard\" , \"4444333322226666\" , \"06/26\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"FamilyAlbum\" , \"5\" , \"John\" , \"2222 E devon\"  , \"Chicago\" , \"Arizona\" , \"50456\", \"MasterCard\" , \"4444333322226666\" , \"06/26\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c06/1[7]/2020\u003e but was:\u003c06/1[6]/2020\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(NewOrderSteps.java:75)\r\n\tat ✽.the user validate new order details \"FamilyAlbum\" , \"5\" , \"John\" , \"2222 E devon\"  , \"Chicago\" , \"Arizona\" , \"50456\", \"MasterCard\" , \"4444333322226666\" , \"06/26\"(file:///C:/Users/kadir/OneDrive/Desktop/CucumberBatch4/src/test/resources/com.WebOrder/NewOrderOutLine.feature:10)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("New Order Validationis failed");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Order Validation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter product info \"ScreenSaver\" and \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_product_info_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter adress info \"Jessica\" , \"3445 E river\" , \"Los Angeles\" , \"California\" , \"45679\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_adress_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter payment info \"American Express\" , \"4444333322228888\" , \"08/22\"",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_enter_payment_info(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate new order details \"ScreenSaver\" , \"3\" , \"Jessica\" , \"3445 E river\"  , \"Los Angeles\" , \"California\" , \"45679\", \"American Express\" , \"4444333322228888\" , \"08/22\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c06/1[7]/2020\u003e but was:\u003c06/1[6]/2020\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_new_order_details(NewOrderSteps.java:75)\r\n\tat ✽.the user validate new order details \"ScreenSaver\" , \"3\" , \"Jessica\" , \"3445 E river\"  , \"Los Angeles\" , \"California\" , \"45679\", \"American Express\" , \"4444333322228888\" , \"08/22\"(file:///C:/Users/kadir/OneDrive/Desktop/CucumberBatch4/src/test/resources/com.WebOrder/NewOrderOutLine.feature:10)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.write("New Order Validationis failed");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com.WebOrder/productsDataTable.feature");
formatter.feature({
  "name": "All Products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of All products",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters username \"Tester\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the demoUser enters password \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.LoginPageSteps.the_demoUser_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the all products button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_clicks_the_all_products_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the product details",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.weborder.NewOrderSteps.the_user_validate_the_product_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});