echo "Running  of calender tests "


npm run clean-reportsfolder
npx cypress run --spec 'cypress/integration/2-advanced-examples/smoke/calenderstandalone.spec.ts'