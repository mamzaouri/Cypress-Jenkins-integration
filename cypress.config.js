const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    
    specPattern:  
    [
      "cypress/e2e/features/*.feature",  // Cucumber tests
      "cypress/e2e/**/*.cy.{js,jsx}"    // Regular Cypress tests
      
    ],
    

    async setupNodeEvents(on, config) {
      // implement node event listeners here

      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;

    },
  },
});
