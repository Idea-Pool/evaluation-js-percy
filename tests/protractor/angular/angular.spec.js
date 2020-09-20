"use strict";
const { percySnapshot } = require("@percy/protractor");
const { waitForElement } = require("../../ui/utils");
const { element, browser } = require("protractor");

const LANDING_PAGE = require("../../ui/angular/landing.json");
const GET_STARTED_PAGE = require("../../ui/angular/getStarted.json");

const $search = element(by.css(LANDING_PAGE["Search Input"]));
const $getStarted = element(by.css(LANDING_PAGE["Get Started Button"]));
const $$docsCards = element.all(by.css(GET_STARTED_PAGE["Docs Cards"]));
const $directive = element(by.cssContainingText(LANDING_PAGE["Search Result"], "Directive"));

describe("angular.io visual test", () => {
    beforeEach(async () => {
        // GIVEN the Landing page is loaded
        await browser.get("https://angular.io/");
    });

    describe("TC1 - Checking Landing page elements", () => {

        it("should load Landing page", async () => {
            await percySnapshot("LANDING PAGE");

            // WHEN the Get started button is clicked
            await $getStarted.click();

            // AND the page is loaded
            await waitForElement($$docsCards);

            //THEN the Get started page should be loaded
            await percySnapshot("GET STARTED PAGE");
        });
    });

    describe("TC2 - Checking search field on landing page", () => {

        it("should load results", async () => {
            // WHEN the Search Input is clicked
            await $search.click();
            await percySnapshot("SEARCH INPUT - CLICKED");


            // AND the searchterm "directive" is typed into the Search Input
            await $search.sendKeys("directive");
            await percySnapshot("SEARCH INPUT - SEARCHTERM ENTERED");

            // THEN the searchterm should be listed as a result
            await waitForElement($directive);
            await percySnapshot("SEARCH RESULT");

            // WHEN the result is clicked
            await $directive.click();

            // THEN the detail page should be loaded
            await browser.sleep(2000);
            await percySnapshot("DIRECTIVE PAGE");
        });
    });
});