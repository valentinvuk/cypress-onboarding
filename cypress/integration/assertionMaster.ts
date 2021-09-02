describe("Assertion Master", () => {
    it("Asserts a lot", () => {
        // @ts-ignore
        cy.googleAndCookies();
        // @ts-ignore
        cy.openMozillaDocs();
        cy.url().should("eq", "https://developer.mozilla.org/en-US/");
        cy.get("#main-q").should("exist").type("map{enter}");
        cy.get(".search-results-list").children().should("have.length.above", 3);
        cy.get("#main-q").should("have.value", "map");
    })
    it("Checks cypress site", () => {
        cy.visit("https://www.cypress.io/");
        cy.get(".container:first").should("exist");
        cy.get(".container > h1").should("exist");
    })
})