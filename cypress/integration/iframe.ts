describe("My Third Task: Form & Iframe", () => {
    it("Fills out Mozilla Form", () => {
        cy.visit("https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form");
        cy.get('iframe[class="sample-code-frame"]').its("0.contentDocument").should("exist").its("body").should("not.be.undefined").then(cy.wrap).find("input#name").type("Valentin");
    })
})