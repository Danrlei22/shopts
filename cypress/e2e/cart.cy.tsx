/// <reference types="cypress" />

describe("Cart flow", () => {
  it("Open home page and e2e search", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[placeholder='Search']").should("be.visible");
    cy.get("input[placeholder='Search']").type("tv");
    cy.get("input[placeholder='Search']").should("have.value", "tv");
    cy.get("button[aria-label='search']").click();
    cy.get(".product-card").should("have.length.greaterThan", 0);
  });
});
