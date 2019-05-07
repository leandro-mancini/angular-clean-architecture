// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

let fs = require("fs");
let mkdirp = require("mkdirp");
let path = require("path");
let reporter = require('cucumber-html-reporter');

const jsonReports = path.join(process.cwd(), "e2e/reports/json");
const htmlReports = path.join(process.cwd(), "e2e/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

let options = {
  theme: 'bootstrap',
  jsonFile: targetJson,
  output: htmlReports + "/cucumber_reporter.html",
  reportSuiteAsScenarios: true
};

exports.config = {
  allScriptsTimeout: 600000,
  pageLoadingTimeout: 60000,
  defaultTimeout: 30000,
  specs: [
    './src/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  cucumberOpts: {
    compiler: [],
    tags: [],
    format: "json:./e2e/reports/json/cucumber_report.json",
    require: ["./src/step-definitions/*.ts", "./src/support/*.ts"],
    strict: true
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    if (!fs.existsSync(jsonReports)) {
      mkdirp.sync(jsonReports);
    }
  },
  onComplete: () => {
    reporter.generate(options);
  }
};
