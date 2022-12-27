import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

const home = new HomePage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})

When('I click the Contact link', () => {
    home.contactLink().click();
})

And('A contact modal should be opened', () => {
    home.contactModal().should('be.visible');
})

Then('The modal should contains title New message', () => {
    home.contactModalTitle().should('include.text', 'New message');
})

When('I click the About Us link', () => {
    home.aboutUsLink().click();
})

And('An about us modal should be opened', () => {
    home.aboutUsModal().should('be.visible');
})

Then('The modal should contains title About us', () => {
    home.aboutUsModalTitle().should('be.visible');
    home.aboutUsModalTitle().should('include.text', 'About us');
})