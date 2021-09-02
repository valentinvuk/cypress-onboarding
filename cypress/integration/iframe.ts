describe("My Third Task: Form & Iframe", () => {
    it("Fills out Mozilla Form", () => {
        cy.visit("https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form");
        // @ts-ignore
        cy.getIframeBody().find("input#name").type("Valentin")
    })
})