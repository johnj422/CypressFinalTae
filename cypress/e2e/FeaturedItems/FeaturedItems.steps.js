import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

const home = new HomePage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})

When('I see the featured items carrousel', () => {
    home.featuredItemsContainer().should('be.visible')
})

Then('The carrousel must have {int} items', items => {
    home.featuredItems().should('have.length', items);
})

