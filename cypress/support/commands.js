Cypress.Commands.add('iframe', {prevSubject: 'element'}, ($iframe, selector) => {

    return new Cypress.Promise(resolve => {
        resolve($iframe.contents().find(selector))
    })
})