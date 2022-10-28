import { defineConfig } from "cypress";

module.exports = defineConfig({
  env: {
    url:"http://34.134.137.239:9000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
