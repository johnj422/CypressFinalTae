
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
    categoriesBtn: '#cat',
    categoriesSelectionBtn: '#contcont > :nth-child(1) > .col-lg-3',
    productsContainer: '#tbodyid',
    productsList: '#tbodyid > ',
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

    clickNextBtn() {
        this.nextBtn().click();
    }

    prevBtn() {
        return cy.get(locator.prevBtn);
    }

    clickPrevBtn() {
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

    categoriesSelectionBtn(category) {
        return cy.get(locator.categoriesSelectionBtn)
            .contains(category)
    }

    clickCategory(category) {
        this.categoriesSelectionBtn(category).click();
    }

    productsContainer() {
        return cy.get(locator.productsContainer)
    }

    productsList() {
        return cy.get(locator.productsList)
    }

    productRandom() {
        let min = Math.ceil(1)
        let max = Math.floor(9)

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    clickRandomProductLink() {
        let num = this.productRandom()
        cy.get(`:nth-child(${num}) > .card > .card-block > .card-title > .hrefch`)
            .click();
    }

}

export default HomePage;