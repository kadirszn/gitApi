package note;

public class note1 {

    /*
    Scenario Outline: --> we can run the scenario multiple times with different set of data. You must use the example table.
Example table must be last line of your scenario. After example you can not write the step.
NullPointerException --> it means one of your object is pointing to the null.
String str;
HomePage homePage;--> this one is pointing null.
homePage.submitButton.click(); --> will throw NullPointerException since We did not instantiate the object.
str.equals();
=======================================
DOC STRING
If we need to provide large amount data in your scenario, we can use the doc string. It will keep our scenario more organized. Doc string starts and ends with """
"""
Text
"""
=========================================
DATA TABLE IN CUCUMBER
Using Selenium go to the UI and get the actual titles
then validate with expected titles.
Data table will not run the scenario multiple times. After datatable we can write another steps.
Data table will return Datatable object. We can convert it to Map, List, List of map or list of list.
Scenario: validation of Title
Then the user validate the product titles
| Product:*         |
| Quantity:*        |
| Price per unit:   |
| Discount:         |
| Total:            |
@Then("the user validate the product titles")
public void the_user_validate_the_product_titles(Datatable table){
        table.asList();

}
@Then("the user validate the product titles")
public void the_user_validate_the_product_titles(List<String> titles){

}
Scenario: validation of Title
Then the user login to the page
| username | Tester |
| password | test   |
@Then("the user login to the page")
public void the_user_login_to_the_page(Datatable table){
        table.asMap();

}
@Then("the user login to the page")
public void the_user_login_to_the_page(Map<String, String> map){

}
Then the user validate "Product:*"
Then the user validate "Quantity:*"
Scenario: List of List
Then the user validate order details
| Name      |Product     |  #   |Date       |   Street        |
|Paul Brown |ScreenSaver |  2   |03/12/2010 |5, Ringer Street |
|Mark Smith |FamilyAlbum |  1   | 03/07/2010|9, Maple Valley  |
@Then("the user validate order details")
public void the_user_validate_order_details(List<List<String>> data){

        data.get(0).get(4);
        data.get(2).get(2);
}
Scenario: List of Map
Then the user validate order details
| Name      |Product     |  #   |Date       |   Street        |
|Paul Brown |ScreenSaver |  2   |03/12/2010 |5, Ringer Street |
|Mark Smith |FamilyAlbum |  1   | 03/07/2010|9, Maple Valley  |
@Then("the user validate order details")
public void the_user_validate_order_details(List<Map<String,String>> data){

        data.get(0).get("Date");
        data.get(0).get("Name");
        data.get(1).get("Street");
}

     */
}
