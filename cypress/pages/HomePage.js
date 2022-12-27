class HomePage {

    //Navigation
    navigateToHomePage() {
        cy.visit('/');
    }

    //Locators
    featuredItems() {
        return cy.get('#carouselExampleIndicators > div > div')
    }
}

export default HomePage;