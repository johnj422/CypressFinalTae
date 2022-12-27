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
    contactLink(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    contactModal(){
        return cy.get('#exampleModal > div')
    }
    contactModalTitle(){
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header')
    }
    aboutUsLink(){
        return cy.get(':nth-child(3) > .nav-link')
    }

    aboutUsModal(){
        return cy.get('#videoModal > .modal-dialog')
    }

    aboutUsModalTitle(){
        return cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header')
    }
}

export default HomePage;