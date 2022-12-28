import userData from '../fixtures/user.json';

class ProductPage {

    addToCartBtn(){
        return cy.get('.col-sm-12 > .btn')
    }

    purchaseBtn(){
        return cy.get('.col-lg-1 > .btn')
    }

    purchaseModal(){
        return cy.get('#orderModal >')
    }

    fillForm(){
        cy.get('#name').type(userData.name)
        cy.get('#country').type(userData.country)
        cy.get('#city').type(userData.city)
        cy.get('#card').type(userData.creditCard)
        cy.get('#month').type(userData.month)
        cy.get('#year').type(userData.year)
    }

    confirmationBtn(){
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    confirmationAlert(){
        return cy.get('.sweet-alert')
    }

    confirmationAlertTitle(){
        return cy.get('.sweet-alert > h2')
    }
}

export default ProductPage;