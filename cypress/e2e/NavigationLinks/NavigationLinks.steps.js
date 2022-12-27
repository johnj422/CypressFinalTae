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

When('I click the Log in link', () => {
    home.logInLink().click();
})

And('A Log in modal should be opened', () => {
    home.logInModal().should('be.visible');
})

Then('The Log in modal should contains title {string}', title => {
    home.logInModalTitle().should('include.text', title);
})

When('I click the Sign up link', () => {
    home.signUpLink().click();
})

And('A Sign up modal should be opened', () => {
    home.signUpModal().should('be.visible');
})

Then('The Sign up modal should contains title {string}', title => {
    home.signUpModalTitle().should('include.text', title);
})