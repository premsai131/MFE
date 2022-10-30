echo "Running  of calender tests "


npm run clean-reportsfolder
npx  $(npm bin)/cypress run --config-file regressionconfig.json
