Feature: Navigation Links

    As a user
    I want to check that every link in the navigation bar
    navigates to the correct page

    Background: User must be in the HomePage
        Given I visit the Homepage

    Scenario: Validate Contact Link
        When I click the Contact link
        And A contact modal should be opened
        Then The contact modal should contains title "New message"

    Scenario: Validate About Us Link
        When I click the About Us link
        And An about us modal should be opened
        Then The About us modal should contains title "About us"
    
    @smoke
    Scenario: Validate Cart Link
        When I click the Cart link
        Then I should de in the Products page
        And The Cart's page title should be "Products"

    @smoke
    Scenario: Validate Log in Link
        When I click the Log in link
        And A Log in modal should be opened
        Then The Log in modal should contains title "Log in"

    @smoke
    Scenario: Validate Sign up Link
        When I click the Sign up link
        And A Sign up modal should be opened
        Then The Sign up modal should contains title "Sign up"

    Scenario: Validate Home Link
        When I click the Home link
        Then The Categories button should be visible
