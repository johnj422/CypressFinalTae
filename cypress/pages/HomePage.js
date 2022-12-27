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
    featuredItem(itemNumber){
        return cy.get('#carouselExampleIndicators > div > div:nth-child(' + itemNumber + ')');
    }
    nextBtn(){
        return cy.get('.carousel-control-next')
    }
    prevBtn(){
        return cy.get('.carousel-control-prev')
    }
}

export default HomePage;