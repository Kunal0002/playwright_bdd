// const { devices } = require('@playwright/test');

module.exports = {
    default: {
      environment: {
        PLAYWRIGHT_HEADLESS: 'true',
      },
      formatOptions: {
        snippetInterface: 'async-await',
      },
      paths: [
        'tests/features/UI/*.feature',
        'tests/features/API/*.feature',
        'tests/features/GQL/*.feature',
      ],
      dryRun: false,
      require: [
        'tests/steps/*.js',
        'tests/hooks/*.js',
        'tests/steps/UI/*.js',
        'tests/steps/API/*.js',
        'tests/steps/GQL/*.js',
        'tests/steps/UI/*.spec.js',
        'tests/steps/API/*.spec.js',
        'tests/steps/GQL/*.spec.js',
      ],
      format: ['pretty'],
      parallel: 1,
      tags: process.env.TEST_TAGS || '@ui or @api or @gql or @demo',

        },
  };