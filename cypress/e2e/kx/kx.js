import { homePage } from "../../fixtures/locator";
import { data } from "../../fixtures/testData";
import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@api" }, () => {
  cy.intercept(`${data.api}/t`).as("search");
});

Before({ tags: "@main_page" }, () => {
  cy.visitPage(data.url);
});

Given("Clear Search", () => {
    cy.clearSearch();
});

When("Search by {string}", (text) => {
    cy.searchByText(text);
});

When("Click on {string} button", (text) => {
    cy.clickButton(text);
});

When("Click on {string} button using {string} {string}", (text, idName, idType) => {
    cy.clickButtonById(text, idName, idType);
});

Then("Expect {string} to be {string} as {string} case", (text, condition, type) => {
    // Recent search does not use https://api.segment.io/v1/t API as far as I know
    if (type == 'normal') {
        cy.wait("@search", { timeout: data.timeout}).its("response.statusCode").should("eq", 200);
    }
    switch (condition) {
        case 'displayed':
            cy.verifySearchByText(text);
            break;
        case 'hidden':
            cy.verifySearchByTextNotExists(text);
        default:
            break;
    }
});

Then("Expect {string} message is displayed", (text) => {
    cy.get(homePage.errorMessage).contains(text);
});

Then("Expect recent products are gone", () => {
    cy.contains(data.recentSearch).should('not.visible');
});
