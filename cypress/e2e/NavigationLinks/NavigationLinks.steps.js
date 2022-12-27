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

Then('The contact modal should contains title {string}', message => {
    home.contactModalTitle().should('include.text', message);
})

When('I click the About Us link', () => {
    home.aboutUsLink().click();
})

And('An about us modal should be opened', () => {
    home.aboutUsModal().should('be.visible');
})

Then('The About us modal should contains title {string}', message => {
    home.aboutUsModalTitle().should('include.text', message);
})

When('I click the Cart link', () => {
    home.cartLink().click();
})

Then('I should de in the Products page', () => {
    home.actualUrl().should('contain', '/cart.html')
})

And('The Cart\'s page title should be {string}', title => {
    home.cartLinkTitle().should('include.text', title);
})