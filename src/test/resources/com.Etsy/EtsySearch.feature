Feature: Validate search in Etsy
   Background: It will run before each scenarioR
     Given the user goes to the Etsy
     # we need to run three scenario and before every scenario I want to navigate the etsy expect second scenario.
  @etsy @tt
  Scenario: Validation of search in etsy
    When the user search in etsy with "winter hat"
    Then the user validate title "Winter hat | Etsy" and url "winter"
  @etsy
    Scenario: Validation of search in etsy
    When the user search in etsy with "hat"
    Then the user validate title "Hat | Etsy" and url "hat"
  @etsy @tt
  Scenario: Validation of search in etsy
    When the user search in etsy with "winter soldier"
    Then the user validate title "Winter soldier | Etsy" and url "soldier"
