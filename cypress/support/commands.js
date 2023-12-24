import { homePage } from "../fixtures/locator";
import { data } from "../fixtures/testData";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// Command to navigate to https://www.central.co.th URL
Cypress.Commands.add("visitPage", (url) => {
    cy.visit(url);
  });
//
// Command to search by given text
Cypress.Commands.add("searchByText", (text) => {
    cy.get(homePage.inputSearch).clear().type(text, {waitForAnimations: false});
  });

// Command to clear search
Cypress.Commands.add("clearSearch", () => {
    cy.get(homePage.inputSearch).clear();
  });

// Command to click on button
Cypress.Commands.add("clickButton", (text) => {
    cy.get('button, span').contains(text).click({force:true});
  });

// Command to click on button by IdType
Cypress.Commands.add("clickButtonById", (text, idName, idType) => {
    cy.get(`[${idType}=${idName}]`).contains(text).click({force:true});
  });

// Command to verify search by given text
Cypress.Commands.add("verifySearchByText", (text) => {
    cy.get(homePage.viewSearchProduct).contains(text, {matchCase: false});
  });

// Command to verify search by given text does not exists
Cypress.Commands.add("verifySearchByTextNotExists", (text) => {
    cy.get(homePage.viewSearchProductNotFound).contains(text, {matchCase: false});
  });
  
  