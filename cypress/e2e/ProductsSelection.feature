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
        Then The section must contains 6 products

    Scenario: Validate Monitors option
        When I click the Monitors button
        And Products section is updated
        Then The section must contains 2 products

    Scenario: Validate that products can be added to cart
        When I click one of the products from de the Home Page
        And I am now in the product page
        And I click the add to cart button
        And An alert window with 'Product added' text is shown
        Then The product should be in the cart

    Scenario: Validate that products can be removed from the cart
        When I add some products to the cart
        And I click the cart link
        And I validate that there are 2 products in the cart
        Then I should be able to delete one product
 
    Scenario: Validate that products can be purchased
        When I add some products to the cart
        And I click the cart link
        And I click the place order button
        And I complete the form
        Then The purchase must be completed
