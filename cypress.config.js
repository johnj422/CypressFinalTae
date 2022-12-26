module.exports = {
  "baseUrl": "https://www.demoblaze.com/",
  "testFiles": "**/*.feature",
  "viewportWidth": 1400,
  "viewportHeight": 800,
  "env": {
      "TAGS": "not @ignore"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
