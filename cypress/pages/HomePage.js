class HomePage {

    //Navigation
    navigateToHomePage() {
        cy.visit('/');
    }

    //Locators
    featuredItemsContainer(){
        return cy.get('#carouselExampleIndicators > div')
    }
    featuredItems() {
        return cy.get('#carouselExampleIndicators > div > div')
    }
}

export default HomePage;