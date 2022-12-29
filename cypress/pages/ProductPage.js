import userData from '../fixtures/user.json';

class ProductPage {

    addToCartBtn() {
        return cy.get('.col-sm-12 > .btn')
    }

    purchaseBtn() {
        return cy.get('.col-lg-1 > .btn')
    }

    purchaseModal() {
        return cy.get('#orderModal >')
    }

    fillForm() {

        let selectors = ['name', 'country', 'city', 'card', 'month', 'year' ]

        selectors.forEach(selector => {
            cy.get(`#${selector}`, { timeout: 5000}).type(userData[selector])
        })

    }

    confirmationBtn() {
        return cy.get('#orderModal >').contains('Purchase')
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
        return cy.get('.sweet-alert')
    }

    confirmationAlertTitle() {
        return cy.get('.sweet-alert > h2')
    }

    requestResponse() {
        return cy.request('https://api.demoblaze.com/entries').as('clickResponse')
            .then(res => {
                return (res.status)
            })
    }
}

export default ProductPage;