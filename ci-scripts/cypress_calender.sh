echo "Running  of calender tests "


npm run clean-reportsfolder
npx $(npm bin)/cypress run --spec '2-advanced-examples/smoke/calenderstandalone.spec.ts'