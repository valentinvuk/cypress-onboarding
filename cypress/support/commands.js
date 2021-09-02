Cypress.Commands.add("googleAndCookies", () => {
    cy.visit("www.google.com");
    cy.get("#L2AGLb").click();
});

Cypress.Commands.add("openMozillaDocs", () => {
    cy.get(".gLFyf.gsfi").type("mozilla docs{enter}");
    cy.get("#search").find("h3:first").click();
})

Cypress.Commands.add('getIframeBody', () => {
    return cy.wait(4000)
        .get('.sample-code-frame')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap);
});