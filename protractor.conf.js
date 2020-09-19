exports.config = {
    directConnect: false,
    specs: ["tests/**/*.spec.js"],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        count: 1,
        shardTestFiles: true,
        maxInstances: 4,
        chromeOptions: {
            args: ["--headless"]
        }
    },
};
