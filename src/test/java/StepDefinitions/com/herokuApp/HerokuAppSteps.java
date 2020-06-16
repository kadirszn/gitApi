package StepDefinitions.com.herokuApp;

import Pages.HerokuAppPages.MainPages;
import Utils.BrowserUtils;
import Utils.ConfigReader;
import Utils.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;

public class HerokuAppSteps {
    WebDriver driver = Driver.getDriver();
    MainPages mainPages = new MainPages(driver);
    @Given("the user on iframe page")
    public void the_user_on_iframe_page() {
     driver.navigate().to(ConfigReader.getProperty("herokuUrl"));
    }

    @When("the user enters the text")
    public void the_user_enters_the_text(String docString) {
        BrowserUtils.switchFrameByIndex(driver , 0);
        mainPages.textBox.sendKeys(docString);

    }

}
