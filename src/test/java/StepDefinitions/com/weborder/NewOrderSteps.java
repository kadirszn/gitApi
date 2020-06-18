package StepDefinitions.com.weborder;

import Pages.WebOrderPages.AllOrderPage;
import Pages.WebOrderPages.HomePage;
import Pages.WebOrderPages.OrderPage;
import Utils.BrowserUtils;
import Utils.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import java.util.List;

public class NewOrderSteps {
    WebDriver driver = Driver.getDriver();
    HomePage homePage = new HomePage(driver);
    OrderPage orderPage = new OrderPage(driver);
    AllOrderPage allOrderPage = new AllOrderPage(driver);
    @Then("the user enter product info {string} and {string}")
    public void the_user_enter_product_info_and(String product, String quantity) {
        homePage.orderButton.click();
        Select select = new Select(orderPage.productName);
        select.selectByVisibleText(product);
        orderPage.quantity.clear();
        orderPage.quantity.sendKeys(quantity);

    }

    @Then("the user enter adress info {string} , {string} , {string} , {string} , {string}")
    public void the_user_enter_adress_info(String customerName, String street, String city, String state, String zipCode) {
        orderPage.customerName.sendKeys(customerName);
        orderPage.street.sendKeys(street);
        orderPage.city.sendKeys(city);
        orderPage.state.sendKeys(state);
        orderPage.zipCode.sendKeys(zipCode);

    }

    @Then("the user enter payment info {string} , {string} , {string}")
    public void the_user_enter_payment_info(String card, String cardNum, String expiration) {
        switch (card) {
            case "Visa":
                orderPage.visa.click();
                break;
            case "MasterCard":
                orderPage.masterCard.click();
                break;
            case "American Express":
                orderPage.amex.click();
                break;
        }
        orderPage.cardNum.sendKeys(cardNum);
        orderPage.expirationDate.sendKeys(expiration);
        orderPage.processButton.click();
    }

    @Then("the user validate success message")
    public void the_user_validate_success_message() {
    String validateMessage="New order has been successfully added.";
        Assert.assertTrue(orderPage.successMessage.isDisplayed());
    }

    @Then("the user validate new order details {string} , {string} , {string} , {string}  , {string} , {string} , {string}, {string} , {string} , {string}")
    public void the_user_validate_new_order_details(String productName, String quantity, String name, String address, String city, String state, String zipcode, String cardType, String cardNumber  , String expDate) throws InterruptedException {
        homePage.viewAllOrder.click();
        List<WebElement> orderDetails = allOrderPage.newOrderDetails;
        Assert.assertEquals(orderDetails.get(1).getText() , name);
        Assert.assertEquals(orderDetails.get(2).getText() , productName);
        Assert.assertEquals(orderDetails.get(3).getText() , quantity);
        String today = BrowserUtils.todaysDate("MM/dd/yyyy");
        //While we are asserting in JUNIT first EXPECTED AND SECOND ACTUAL
        //in TESTNG first actual then expected
        Assert.assertEquals(orderDetails.get(4).getText() , today);
        Assert.assertEquals(orderDetails.get(5).getText() , address);
        Assert.assertEquals(orderDetails.get(6).getText() , city);
        Assert.assertEquals(orderDetails.get(7).getText() , state);
        Assert.assertEquals(orderDetails.get(8).getText() , zipcode);
        Assert.assertEquals(orderDetails.get(9).getText() , cardType);
        Assert.assertEquals(orderDetails.get(10).getText() , cardNumber);
        Assert.assertEquals(orderDetails.get(11).getText() , expDate);
        Thread.sleep(2000);
    }
    @Then("the user goes to the new order page")
    public void the_user_goes_to_the_new_order_page() {
       homePage.orderButton.click();
    }

    @Then("the user validate the product headers")
    public void the_user_validate_the_product_headers(List<String> productHeaders) {
        List<String> actualProductHeaders  = BrowserUtils.getTextOfElement(orderPage.productDetails);
        Assert.assertEquals(actualProductHeaders , productHeaders);
    }
    @Then("the user validate the adress information")
    public void the_user_validate_the_adress_information(List<String> addressInformation) {
      List<String > actualAddress = BrowserUtils.getTextOfElement(orderPage.addressDetails);
      Assert.assertEquals(actualAddress , addressInformation );
    }

    @Then("the user clicks the all products button")
    public void the_user_clicks_the_all_products_button() {
      homePage.allProductsButton.click();
    }

    @Then("the user validate the product details")
    public void the_user_validate_the_product_details(DataTable dataTable) {
      List<WebElement> pTable = homePage.productTable;
    for(int i =0 ; i<dataTable.asList().size() ; i++){
        Assert.assertEquals("Validation of product table",dataTable.asList().get(i) , pTable.get(i).getText());
    }
    }
}
