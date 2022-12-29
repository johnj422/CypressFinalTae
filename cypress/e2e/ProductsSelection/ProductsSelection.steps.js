import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"
import CartPage from "../../pages/CartPage";
import ProductPage from "../../pages/ProductPage";

const home = new HomePage;
const cart = new CartPage;
const product = new ProductPage;

Given('I visit the Homepage', () => {
    home.navigateToHomePage();
})

When('I click the {string} button', category => {
    home.clickCategory(category);
    product.requestResponse().should('eq', 200)
})

And('Products section is updated', () => {
    home.productsContainer().should('be.visible')
})

Then('The section must contains {int} products', products => {
    home.productsList().should('have.length', products)
})

When('I click one of the products from de the Home Page', () => {
    home.clickRandomProductLink();
})

And('I am now in the product page', () => {
    home.actualUrl().should('contain', '/prod')
})

And('I click the add to cart button', () => {
    product.clickAddToCart();
})

Then('The product should be in the cart', () => {
    home.clickNavLink('Cart');
    cart.productsInCartContainer().should('be.visible')
})

When('I add {int} products to the cart', quantity => {
    product.addProductsToCart(quantity);
})

And('I click the {string} link', link => {
    home.clickNavLink(link);
})

And('I validate that there are {int} products in the cart', products => {
    cart.productsInCartContainer().should('have.length', products)
})

Then('I should be able to delete one product', () => {
    cart.clickDeleteProduct();
    cart.productsInCartContainer().should('have.length', 1)
})

And('I click the place order button', () => {
    product.clickPurchaseBtn();
})

And('I complete the form', () => {
    product.purchaseModal().should('be.visible')
    product.fillForm();
    product.clickConfirmationBtn()
    product.interceptResponse().its('response.statusMessage').should('eq', 'OK')
})

Then('The purchase must be completed', () => {
    product.confirmationAlert().should('be.visible')
    product.confirmationAlertTitle().should('have.text', 'Thank you for your purchase!')
})