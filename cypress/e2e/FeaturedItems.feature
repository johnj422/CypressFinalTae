Feature: Featured Items Carrousel

    As a user
    I want to check that the carrousel is working properly
    every time Homepage is loaded

    Background: User must be in the HomePage
        Given I visit the Homepage

    Scenario: Validate Number of Featured Items
        When I see the featured items carrousel
        Then The carrousel must have 3 items

    Scenario: Validate next button is working
        When Item 1 is visible
        And I click the next button
        Then Item 2 should be visible

    Scenario: Validate previous button is working
        When Item 1 is visible
        And I click the previous button
        Then Item 3 should be visible