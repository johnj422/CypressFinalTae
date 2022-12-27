Feature: Products and Categories section

    As a user
    I want to check that every the products from the Categories list are shown,
    and can be selected, added to cart and purchased.

    Background: User must be in the HomePage
        Given I visit the Homepage

    Scenario: Validate Phones option
        When I click the Phones button
        And Products section is updated
        Then The section must contains 7 products

    Scenario: Validate Laptops option
        When I click the Laptops button
        And Products section is updated
        Then The section must contains 15 products

    Scenario: Validate Monitors option
        When I click the Monitors button
        And Products section is updated
        Then The section must contains 11 products