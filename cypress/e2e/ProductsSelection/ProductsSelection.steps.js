import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

const home = new HomePage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})

When('I click the Phones button', () => {
    home.phonesCategoryBtn().should('be.visible')
        .click();
})

And('Products section is updated', () => {
    home.productsContainer().should('be.visible')
})

Then('The section must contains {int} products', products => {
    home.productsList().should('have.length', products)
})

When('I click the Laptops button', () => {
    home.laptopsCategoryBtn().should('be.visible')
        .click();
})

When('I click the Monitors button', () => {
    home.monitorsCategoryBtn().should('be.visible')
        .click();
})