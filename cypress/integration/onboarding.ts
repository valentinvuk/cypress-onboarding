describe('My First & Second Task: Custom commands', () => {
    it('Visits Cypress via Google', () => {
        // @ts-ignore
        cy.googleAndCookies();
        cy.get(".gLFyf.gsfi").type("cypress{enter}").should("have.value", "cypress");
        cy.get("#search").find("h3:first").click();
        cy.url().should("eq", "https://www.cypress.io/");
    })
})


