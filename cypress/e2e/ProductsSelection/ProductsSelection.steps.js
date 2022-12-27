import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"
import CartPage from "../../pages/CartPage";

const home = new HomePage;
const cart = new CartPage;

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

When('I click one of the products from de the Home Page', () => {
    home.randomProductLink().click();
})

And('I am now in the product page', () => {
    home.actualUrl().should('contain', '/prod.html')
})

And('I click the add to cart button', () => {
    home.addToCartBtn().should('be.visible')
        .click();
})

And('An alert window with {string} text is shown', message => {
    cy.on('window:alert', (txt) => {
        expect(txt).to.contain(message);
    })
})

Then('The product should be in the cart', () => {
    home.cartLink().should('be.visible')
        .click();
    cart.productsInCartContainer().should('be.visible')
})

When('I add some products to the cart', () => {
    home.randomProductLink()
        .click();
    home.addToCartBtn().should('be.visible')
        .click();
    home.homeLink().should('be.visible')
        .click();
    home.randomProductLink()
        .click();
    home.addToCartBtn().should('be.visible')
        .click();
})

And('I click the cart link', () => {
    home.cartLink().should('be.visible')
       .click();
})

And('I validate that there are {int} products in the cart', products => {
    cart.productsInCartContainer().should('have.length', products)
})

Then('I should be able to delete one product', () => {
    cart.deleteProductFromCart().should('be.visible')
    .click();
    cart.productsInCartContainer().should('have.length', 1)
})