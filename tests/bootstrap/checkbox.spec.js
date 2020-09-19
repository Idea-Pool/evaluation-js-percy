"use strict";
const { percySnapshot } = require("@percy/protractor");
const { browser, element } = require("protractor");
const urls = require("../../data/testUrls.json").Bootstrap;
const CHECKBOXES = require("../../ui/bootstrap/checkboxes.json");

const $defaultCheckBox = element(by.css(CHECKBOXES["Default CheckBox"]));
const $secondDefaultRadio = element(by.css(CHECKBOXES["Second Default Radio"]));

describe("getbootstrap.com visual test", () => {
    beforeAll(() => browser.waitForAngularEnabled(false));

    describe("TC-4 Interaction with checkbox form elements", () => {
        it("should display checkbox elements properly", async () => {
            await browser.get(urls.checkbox);
            await percySnapshot("CHECKBOX");

            // AND the default checkbox is clicked
            await $defaultCheckBox.click();
            await percySnapshot("CHECKBOX - CLICKED");
        });
    });

    describe("TC-5 Interaction with radio form elements", () => {
        it("should display radio elements properly", async () => {
            await browser.get(urls.checkbox);
            await percySnapshot("RADIO");

            await $secondDefaultRadio.click();
            await percySnapshot("RADIO - CLICKED");
        });
    });
});