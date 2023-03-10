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
    home.featuredItemsArray().should('have.length', items);
})

When('Item {int} is visible', item => {
    home.featuredItemByIndex(item).should('be.visible')
})

And('I click the next button', () => {
    home.nextBtn().should('be.visible');
    home.clickNextBtn();
})

Then('Item {int} should be visible', item => {
    home.featuredItemByIndex(item).should('be.visible')
})

And('I click the previous button', () => {
    home.prevBtn().should('be.visible');
    home.clickPrevBtn();
})

