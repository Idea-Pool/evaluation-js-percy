"use strict";
const { percySnapshot } = require("@percy/protractor");
// const { waitForElement } = require("../ui/utils");
const { browser, element, Key } = require("protractor");
const urls = require("../../data/testUrls.json").Bootstrap;
const percyIgnore = {
    percyCSS: "#carbonads { display: none; }",
};

describe("getbootstrap.com visual test", () => {
    beforeAll(() => browser.waitForAngularEnabled(false));

    describe("TC-6 Checking button form elements", () => {
        it("should display button form elements properly", async () => {
            await browser.get(urls.buttons);
            await percySnapshot("BUTTONS", percyIgnore);
            // AND the page is scrolled down 1 page
            //await browser.actions().sendKeys(Key.PAGE_DOWN).perform();
            const $body = element(by.css("body"));
            await $body.sendKeys(Key.PAGE_DOWN);
            await percySnapshot("BUTTONS - SCROLLED", percyIgnore);
        });
    });
});
