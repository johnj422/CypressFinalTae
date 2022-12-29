
var locator = {
    //Featured Items Locators
    featuredItems: '#carouselExampleIndicators',
    nextBtn: '.carousel-control-next',
    prevBtn: '.carousel-control-prev',
}

class HomePage {

    //Navigation
    navigateToHomePage() {
        cy.visit('/');
    }

    //FeaturedItems Methods

    featuredItemsContainer() {
        return cy.get(`${locator.featuredItems} > div`);
    }

    featuredItemsArray() {
        return cy.get(`${locator.featuredItems} > div > div`);
    }

    featuredItemByIndex(itemNumber) {
        return cy.get(`${locator.featuredItems} > div > div:nth-child(${itemNumber})`);
    }

    nextBtn() {
        return cy.get(locator.nextBtn);
    }

    clickNextBtn(){
        this.nextBtn().click();
    }

    prevBtn() {
        return cy.get(locator.prevBtn);
    }

    clickPrevBtn(){
        this.prevBtn().click();
    }
    contactLink() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    contactModal() {
        return cy.get('#exampleModal > div')
    }
    contactModalTitle() {
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header')
    }
    aboutUsLink() {
        return cy.get(':nth-child(3) > .nav-link')
    }

    aboutUsModal() {
        return cy.get('#videoModal > .modal-dialog')
    }

    aboutUsModalTitle() {
        return cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header')
    }

    cartLink() {
        return cy.get('#cartur')
    }

    cartLinkTitle() {
        return cy.get('.col-lg-8 > h2')
    }

    actualUrl() {
        return cy.url()
    }

    logInLink() {
        return cy.get('#login2')
    }

    logInModal() {
        return cy.get('#logInModal > .modal-dialog > .modal-content')
    }

    logInModalTitle() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header')
    }

    signUpLink() {
        return cy.get('#signin2')
    }

    signUpModal() {
        return cy.get('#signInModal > .modal-dialog > .modal-content')
    }

    signUpModalTitle() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header')
    }

    homeLink() {
        return cy.get('.active > .nav-link')
    }

    categoriesBtn() {
        return cy.get('#cat')
    }

    phonesCategoryBtn() {
        return cy.get('[onclick="byCat(\'phone\')"]')
    }

    productsContainer() {
        return cy.get('#tbodyid')
    }

    productsList() {
        return cy.get('#tbodyid > ')
    }

    laptopsCategoryBtn() {
        return cy.get('[onclick="byCat(\'notebook\')"]')
    }

    monitorsCategoryBtn() {
        return cy.get('[onclick="byCat(\'monitor\')"]')
    }

    productRandom() {
        let min = Math.ceil(1)
        let max = Math.floor(7)

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomProductLink() {
        let num = this.productRandom()
        return cy.get(`:nth-child(${num}) > .card > .card-block > .card-title > .hrefch`)
    }

}

export default HomePage;