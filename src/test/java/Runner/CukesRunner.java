package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\test\\resources\\com.WebOrder\\NewOrderDataTables.feature",
        glue = "StepDefinitions",
        monochrome = false,
        dryRun = true
      // tags= "@etsyOutline"
)
public class CukesRunner {
}
