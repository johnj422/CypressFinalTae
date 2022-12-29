import './commands'
import '@shelex/cypress-allure-plugin';

// Alternatively you can use CommonJS syntax:
// require('./commands')
/* Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  }) */
 /*  after(() => {
        if(Cypress.mocha.getRunner().suite.ctx.currentTest.state == "passed"){
        cy.log("Test passed");
        }
        else {
          cy.log("Test failed");
        }
    })
 */
