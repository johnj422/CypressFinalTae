class CartPage {

    //Locators

    productsInCartContainer(){
        return cy.get('.success')
    }

    deleteProductFromCart(){
        return cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a')
    }

}

export default CartPage;