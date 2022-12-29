import userData from '../fixtures/user.json';
import endPoints from '../fixtures/endPoints.json';
import HomePage from './HomePage';

var locator = {
    addToCart: '.col-sm-12 > .btn',
    purchaseBtn: '.col-lg-1 > .btn',
    purchaseModal: '#orderModal >',
    confirmationAlert: '.sweet-alert'
}

class ProductPage extends HomePage {

    addToCartBtn() {
        return cy.get(locator.addToCart);
    }

    clickAddToCart(){
        this.addToCartBtn().click();

    }

    purchaseBtn() {
        return cy.get(locator.purchaseBtn);
    }

    clickPurchaseBtn(){
        this.purchaseBtn().click();
    }

    purchaseModal() {
        return cy.get(locator.purchaseModal);
    }

    fillForm() {

        let selectors = ['name', 'country', 'city', 'card', 'month', 'year' ]

        selectors.forEach(selector => {
            cy.get(`#${selector}`, { timeout: 5000}).type(userData[selector])
        })

    }

    confirmationBtn() {
        return cy.get(locator.purchaseModal).contains('Purchase')
    }

    clickConfirmationBtn() {
        cy.intercept('POST', '/deletecart')
            .as('purchaseConfirmation')
            .then(() => {
                this.confirmationBtn().click();
            })
    }

    interceptResponse() {
        return cy.get('@purchaseConfirmation')
            .then(res => {
                return (res)
            })
    }

    confirmationAlert() {
        return cy.get(locator.confirmationAlert)
    }

    confirmationAlertTitle() {
        return cy.get(`${locator.confirmationAlert} > h2`)
    }

    requestResponse() {
        return cy.request(endPoints.entries).as('clickResponse')
            .then(res => {
                return (res.status)
            })
    }

    addProductsToCart(quantity){
        let products = quantity;

        do {
            this.clickRandomProductLink();
            this.clickAddToCart();
            this.clickNavLink('Home');
            products--
        }while (products > 0)
    }
}

export default ProductPage;