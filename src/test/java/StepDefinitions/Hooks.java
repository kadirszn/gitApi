package StepDefinitions;

import Utils.BrowserUtils;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {
    //We have before and after annotations.
    //Those are coming from theCucumber
    // They will run before and after each scenario
    @Before
    public void setup(Scenario scenario){

        System.out.println("This one will run before each scenario");
        System.out.println(scenario.getName());
    }
    @After
    public void tearDown(Scenario scenario) {
        System.out.println("This one will run after each scenario");
        if (scenario.isFailed()) {
            scenario.log(scenario.getName() + "is failed");
            System.out.println("is failed");
            BrowserUtils.takeScreenShot();

        }

    }
    // I am saying run this Before annotation if the scenario has @tt tag
    @Before("@tt")
    public void conditionalAnnotation(){
       // I want to run this annotation only before @conditional tag
        System.out.println("Conditional annotation");
        // it will run only the scenarios which has @conditional tag
    }
}
