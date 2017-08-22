// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    const prodServer = browser.globals.prodServerURL;

    browser
      .url(prodServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('background')
      .end();
  },
};
