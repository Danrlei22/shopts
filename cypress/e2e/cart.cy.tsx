/// <reference types="cypress" />

describe("Cart flow", () => {
  it("Search product", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[placeholder='Search']").should("be.visible");
    cy.get("input[placeholder='Search']").type("tv");
    cy.get("input[placeholder='Search']").should("have.value", "tv");
    cy.get("button[aria-label='search']").click();
    cy.get(".product-card").should("have.length.greaterThan", 0);
  });

  it("Add product to cart", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[placeholder='Search']").type("mouse");
    cy.get("button[aria-label='search']").click();
    cy.get(".product-card").first().click();
    cy.get(".btn-cart").click();
    cy.get(".cart-button").click();
    cy.get(".cart-items").should("be.visible");
    cy.get(".cart-items").should("have.length", 1);
  });

  it("Alter quantity of product in cart", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[placeholder='Search']").type("tv");
    cy.get("button[aria-label='search']").click();
    cy.get(".product-card").first().click();
    cy.get(".btn-cart").click();
    cy.get(".cart-button").click();
    cy.get(".cart-items").should("be.visible");
    cy.get(".cart-items").should("have.length", 1);
    cy.get(".item-quantity").should("have.value", "1");
    for (let i = 2; i <= 5; i++) {
      cy.get(".item-more-quantity").click();
    }
    cy.get(".item-quantity").should("have.value", "5");
  });
});
