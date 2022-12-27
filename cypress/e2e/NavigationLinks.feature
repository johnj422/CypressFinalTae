Feature: Navigation Links

    As a user
    I want to check that every link in the navigation bar
    navigates to the correct page

    Background: User must be in the HomePage
        Given I visit the Homepage

    Scenario: Validate Contact Link
        When I click the Contact link
        And A contact modal should be opened
        Then The modal should contains title New message

    Scenario: Validate About Us Link
        When I click the About Us link
        And An about us modal should be opened
        Then The modal should contains title About us