import { BaseDependencies } from "../../../robots/BaseRobot";
import { CalenderEyes, CalenderHands } from "../../../robots/calender";
import { HomePageEyes, HomePageHands } from "../../../robots/homepage";
const daysInaMonth = require("./../../../data/calender.json");
const homePageEyes = new HomePageEyes();
const homePageHands = new HomePageHands();
const calenderEyes = new CalenderEyes();
const calenderHands = new CalenderHands();
let date = new Date()
const homePageDependancies = new BaseDependencies()
const eventName = "cypresstest"
const neweventname = "regressiontest"
let starttime = '06:45 PM'
let endtime = '07:45 PM'
let newstarttime = "08:30 PM"
let newendtime = "09:15 PM"
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
context('Verify the functionlity of the calender micro app', () => {
    describe('Verify all contents in the calender page ', () => {
        before('visit the website', () => {
            homePageDependancies.visitUrl(Cypress.env('root_url'))
            Cypress.on('uncaught:exception', (err) => {
                return false
            })
        })
        it('Verify header nav bar', () => {
            homePageEyes.seeshomeButtonText()
            homePageEyes.seesCalenderIcon()
            homePageEyes.seesCartIcon()
            homePageEyes.seesAvatarlogo()
        })
        it('Verify login functionality', () => {
            calenderHands.clickonCalenderIcon()
            cy.wait(10000)
            homePageDependancies.login();
        })
        it('verify main page header in calender', () => {
            calenderEyes.seesCurrentMonthDisaplyed('October 2022')
            calenderEyes.seesMonthWeekAndDaybuttons()
            calenderEyes.seesTodayButton()
        })
    })
    describe('Verify the functionality of month view calender ', () => {
        it('verify the ui of monthly view in calender', () => {
            calenderEyes.seesDaysTextVisibleInCalender()
            cy.log(daysInaMonth.october)
            calenderEyes.seesNumberOfdaysInaMonth(daysInaMonth.october);
        })
        it.skip('Verify adding of event in month view calender', () => {
            let currentDate = new Date().toJSON().slice(0, 10);
            calenderHands.clickOnTodaysDatefield(currentDate)
            calenderEyes.verifyEventDialog()
            calenderHands.typeEventName(eventName)
            calenderHands.setStartTimeas(starttime)
            calenderHands.setEndTimeas(endtime)
            calenderHands.clickOnAddeventButton()
            calenderEyes.seesNewlyAddedEventInMonthView('6:45p', eventName)
        })
        it('Verify editing of newly added event in month view', () => {
            calenderHands.clickOnNewlyAddedEvent(eventName)
            cy.wait(4000)
            calenderEyes.seesEventName(eventName)
            calenderEyes.seesStartTime(starttime)
            calenderEyes.seesEndTime(endtime)
            calenderHands.typeEventName(neweventname)
            calenderHands.setStartTimeas(newstarttime)
            calenderHands.setEndTimeas(newendtime)
            calenderHands.clickonEditeventButton()
        })
        it('verify the edited event start times and end times', () => {
            calenderHands.clickOnNewlyAddedEvent(neweventname)
            calenderEyes.seesEventName(neweventname)
            calenderEyes.seesStartTime(newstarttime)
            calenderEyes.seesEndTime(newendtime)
            calenderHands.closeEventDialog()
        })
    })
    describe('verify weekly view in calender', () => {
        it('verify the UI of weekly view in calender', () => {
            calenderHands.clickOnweekViewButton();
            calenderEyes.seesLabeltextWithWeeklyDate('Oct 30 – Nov 5, 2022')
            calenderEyes.seesDateAndDayTextFortheWeekNotNull()
            calenderEyes.seesAllDayTimeforTheDate()
        })
        it('Verify the newly added event in week view', () => {
            let currentDate = new Date().toJSON().slice(0, 10);
            calenderEyes.seesNewlyAddedEventInWeeklyView(currentDate)
        })
    })
    describe('Verify daily view in calender', () => {
        it('Verify the UI of day view in calender', () => {
            calenderHands.clickOnDayViewButton()
            // calenderEyes.seesLabeltextWithCurrentDate(monthNames[date.getMonth()] + date.getDate() + ", " + date.getFullYear())
            calenderEyes.seescurrentDaytextVisible(weekday[date.getDay()])
            calenderEyes.seesAllDayTimeforTheDate()
        })
        it('Verify newly added event in the day view calender', () => {
            calenderEyes.seesNewlyAddedEventInDayView('8:30 - 9:15', neweventname)
        })
        it('Verify changing of event time in day view calender', () => {
            calenderHands.clickOnEvent(neweventname)
            calenderHands.typeEventName(eventName)
            calenderHands.setStartTimeas(starttime)
            calenderHands.setEndTimeas(endtime)
            calenderHands.clickonEditeventButton()
        })
    })
})
