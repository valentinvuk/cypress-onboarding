Cypress.Commands.add("googleAndCookies", () => {
    cy.visit("www.google.com");
    cy.get("#L2AGLb").click();
});

Cypress.Commands.add("openMozillaDocs", () => {
    cy.get(".gLFyf.gsfi").type("mozilla docs{enter}");
    cy.get("#search").find("h3:first").click();
})