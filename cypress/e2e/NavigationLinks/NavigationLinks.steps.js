import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

const home = new HomePage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})

When('I click the {string} link', description => {
    home.clickNavLink(description);
})

And('A contact modal should be opened', () => {
    home.contactModal().should('be.visible');
})

Then('The contact modal should contains title {string}', message => {
    home.contactModal().should('include.text', message);
})

And('An about us modal should be opened', () => {
    home.aboutUsModal().should('be.visible');
})

Then('The About us modal should contains title {string}', message => {
    home.aboutUsModal().should('include.text', message);
})

Then('I should be in the {string} page', page => {
    home.actualUrl().should('contain', `/${page}`);
})

And('The Cart\'s page title should be {string}', title => {
    home.cartLinkTitle().should('include.text', title);
})

And('A Log in modal should be opened', () => {
    home.logInModal().should('be.visible');
})

Then('The Log in modal should contains title {string}', title => {
    home.logInModal().should('include.text', title);
})

And('A Sign up modal should be opened', () => {
    home.signUpModal().should('be.visible');
})

Then('The Sign up modal should contains title {string}', title => {
    home.signUpModal().should('include.text', title);
})

Then('The Categories button should be visible', () => {
    home.categoriesBtn().should('be.visible')
})