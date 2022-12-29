
var locator = {
    //Featured Items Locators
    featuredItems: '#carouselExampleIndicators',
    nextBtn: '.carousel-control-next',
    prevBtn: '.carousel-control-prev',
    navLink: '.nav-link',
    contactModal: '#exampleModal',
    aboutUsModal: '#videoModal',
    cartLinkTitle: '.col-lg-8 > h2',
    loginModal: '#logInModal',
    signUpModal: '#signInModal',
    categoriesBtn: '#cat'
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

    //NavigationLinks Methods
    navLink(description) {
        return cy.get(locator.navLink).contains(description)
    }

    clickNavLink(description) {
        this.navLink(description).click();
    }

    contactModal() {
        return cy.get(locator.contactModal)
    }

    aboutUsModal() {
        return cy.get(locator.aboutUsModal)
    }

    cartLinkTitle() {
        return cy.get(locator.cartLinkTitle)
    }

    actualUrl() {
        return cy.url()
    }

    logInModal() {
        return cy.get(locator.loginModal)
    }

    signUpModal() {
        return cy.get(locator.signUpModal)
    }

    categoriesBtn() {
        return cy.get(locator.categoriesBtn)
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