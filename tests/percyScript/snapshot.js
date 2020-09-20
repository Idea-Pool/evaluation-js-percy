const PercyScript = require("@percy/script");
const TEST_URL = require("../../data/testUrls.json")
const LANDING_PAGE = require("../../ui/angular/landing.json");
const GET_STARTED_PAGE = require("../../ui/angular/getStarted.json");

const options = { headless: true };

PercyScript.run(async (page, percySnapshot) => {
    // GIVEN the Angular landing page is opened
    await page.goto(TEST_URL.Angular.baseUrl);
    await page.waitFor(LANDING_PAGE["Get Started Button"]);
    await percySnapshot("LANDING PAGE");

    // WHEN the Get Started button is clicked
    await page.click(LANDING_PAGE["Get Started Button"]);

    // THEN the Get Started page should be loaded
    await page.waitFor(GET_STARTED_PAGE["Docs Cards"]);
    await percySnapshot("GET STARTED PAGE");
}, options);

PercyScript.run(async (page, percySnapshot) => {
    await page.goto(TEST_URL.Angular.baseUrl);
    // WHEN the Search Input is clicked
    await page.click(LANDING_PAGE["Search Input"]);
    await percySnapshot("SEARCH INPUT - CLICKED");


    // AND the searchterm "directive" is typed into the Search Input
    const searchInput = await page.$(LANDING_PAGE["Search Input"]);
    await searchInput.type("directive");
    await percySnapshot("SEARCH INPUT - SEARCHTERM ENTERED");

    // THEN the searchterm should be listed as a result
    await page.waitFor(LANDING_PAGE["Search Result"]);
    await percySnapshot("SEARCH RESULT");

    // WHEN the expected result is clicked
    await page.waitForXPath(".//span[.='Directive']");
    const directive = await page.$x(".//span[.='Directive']");
    await directive[0].click();

    // THEN the detail page should be loaded
    await page.waitFor("#directive");
    await percySnapshot("DIRECTIVE PAGE");
}, options);
