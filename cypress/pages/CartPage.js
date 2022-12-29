
var locator = {

    productsInCartContainer: '.success',
    deleteProductFromCart: '#tbodyid > :nth-child(1) > :nth-child(4) > a',
}

class CartPage {

    //Locators

    productsInCartContainer(){
        return cy.get(locator.productsInCartContainer);
    }

    deleteProductFromCart(){
        return cy.get(locator.deleteProductFromCart);
    }

    clickDeleteProduct(){
        this.deleteProductFromCart().click();
    }

}

export default CartPage;