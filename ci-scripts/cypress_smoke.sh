echo "Running  of csmoke tests for microfrontend application"


npm run clean-reportsfolder
npx $(npm bin)/cypress run --spec 'cypress/integration/2-advanced-examples/smoke/home.spec.ts'
npx $(npm bin)/cypress run --spec 'cypress/integration/2-advanced-examples/smoke/pdp.spec.ts'
npx $(npm bin)/cypress run --spec 'cypress/integration/2-advanced-examples/smoke/calender.spec.ts'
