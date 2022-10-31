echo "Running  of homepage tests "


npm run clean-reportsfolder
npx $(npm bin)/cypress run --spec 'cypress/integration/2-advanced-examples/smoke/pdp.spec.ts'