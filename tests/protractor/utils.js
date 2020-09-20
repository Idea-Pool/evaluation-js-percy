"use strict";

const { browser } = require("protractor");
const DEFAULT = {
    TIMEOUT: 60 * 1000,
    MESSAGE: "The given element is not present"
};

const isElementPresent = async el => {
    if (el.length) {
        const visibility = el.map(e => e.isPresent());
        return visibility.every(Boolean);
    } else {
        return el.isPresent();
    }
};

const waitForElement = async (
    el,
    timeout = DEFAULT.TIMEOUT,
    message = DEFAULT.MESSAGE
) => {
    return browser.wait(
        () => isElementPresent(el),
        timeout,
        message
    );
};

module.exports = {
    isElementPresent,
    waitForElement
};
