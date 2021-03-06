Feature: verify login functionality

    As a user i should login sucessfully
    
    @Smoke
    Scenario Outline: 5G handset with plan and 5G pass prospect sale journey
        Given I start the digital mobile "<acquisition>" journey
        And I select an in stock 5G handset
        And I click the next button on the configurator page
        And I select a plan on the plan configurator page
        And I click continue on the plan configurator page

    Examples:
        | acquisition |
        | Value 1  | 
        | Value 2  | 
