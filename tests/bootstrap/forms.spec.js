"use strict";
const { percySnapshot } = require("@percy/protractor");
const { browser } = require("protractor");
const urls = require("../../data/testUrls.json").Bootstrap;


describe("getbootstrap.com visual test", () => {
    beforeAll(() => browser.waitForAngularEnabled(false));

    describe("TC-3 Checking form elements", () => {
        it("should display form elements properly", async () => {
            await browser.get(urls.forms);
            await percySnapshot("FORMS");
        });
    });

    describe("TC-7 Checking select form elements", () => {
        it("should display select form elements properly", async () => {
            await browser.get(urls.formControls);
            await percySnapshot("FORM CONTROL");
        });
    });
});