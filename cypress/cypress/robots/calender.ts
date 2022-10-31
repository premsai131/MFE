import { BaseEyes, BaseHands } from "./BaseRobot";

export class CalenderEyes extends BaseEyes {
    seesCurrentMonthDisaplyed(date: any) {
        this.seesDomContainText('[class="fc-toolbar-title"]', date)
    }
    seesMonthWeekAndDaybuttons() {
        this.seesDomContainText('[title="month view"]', 'month')
        this.seesDomContainText('[title="week view"]', 'week')
        this.seesDomContainText('[title="day view"]', 'day')
    }
    seesTodayButton() {
        this.seesDomContainText('[title="This month"]', 'today')
    }
    seesDaysTextVisibleInCalender() {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        days.forEach(n => {
            this.seesDomContainText('tr>th a', n)
        })
    }
    seesNumberOfdaysInaMonth(days: any) {
        for (let i = 1; i <= days; i++) {
            cy.get('tr>td a').should('contain', i)
        }
    }
    seesLabeltextWithWeeklyDate(date: any) {
        this.seesDomContainText('[id="fc-dom-1"]', date)
    }
    seesDateAndDayTextFortheWeekNotNull() {
        for (let i = 0; i < 7; i++) {
            cy.get('tr>th a').eq(i).then(txt => {
                let date = txt.text()
                expect(date).to.not.equal('null')
            })
        }
    }
    seesAllDayTimeforTheDate() {
        let time = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
        time.forEach((element, index) => {
            cy.get('tr>td>[class*="fc-timegrid-slot-label"]').eq(index).should('contain', element)
        })
    }
    verifyEventDialog() {
        this.seesDomContainText('div>h2', 'Add an event')
        this.seesDomContainText('div>p', 'Event name')
        this.seesDomVisible('[placeholder="Add an event"]')
        this.seesDomContainText('div>p', 'Start Time')
        this.seesDomContainText('div>p', 'End Time')
        this.seesDomContainText('button', 'Add event')
    }
    seesNewlyAddedEventInMonthView(starttime: any, eventname: any) {
        this.seesDomContainText('a[class*="fc-daygrid-event"]', starttime)
        this.seesDomContainText('a[class*="fc-daygrid-event"]>div', eventname)
    }
    seesNewlyAddedEventInWeeklyView(currentdate: any) {
        cy.get(`[data-date="${currentdate}"] [class="fc-event-title fc-sticky"]`).scrollIntoView()
        this.seesDomVisible(`[data-date="${currentdate}"] [class="fc-event-title fc-sticky"]`)
    }
    seesEventName(eventname: any) {
        cy.get('[placeholder="Add an event"]').should('have.value', eventname)
    }
    seesStartTime(starttime) {
        cy.get('[placeholder="hh:mm (a|p)m"]').eq(0).should('have.value', starttime)
    }
    seesEndTime(endtime) {
        cy.get('[placeholder="hh:mm (a|p)m"]').eq(1).should('have.value', endtime)
    }
    seesLabeltextWithCurrentDate(text: any) {
        cy.scrollTo('top')
        this.seesDomContainText('div>h2', text)
    }
    seescurrentDaytextVisible(text: any) {
        this.seesDomContainText('div>a', text)
    }
    seesNewlyAddedEventInDayView(eventtime: any, eventname: any) {
        this.seesDomContainText('[class="fc-event-time"]', eventtime)
        this.seesDomContainText('[class="fc-event-title fc-sticky"]', eventname)
    }
    seesDeleteEventButton() {
        this.seesDomContainText('button', 'Delete')
    }
}
export class CalenderHands extends BaseHands {
    clickonCalenderIcon() {
        this.clickOnDomElement('[data-testid="CalendarTodayIcon"]')
    }
    clickOnMonthView() {
        this.clickOnDomContainText('[title="month view"]', 'month')
    }
    clickOnweekViewButton() {
        this.clickOnDomContainText('[title="week view"]', 'week')
    }
    clickOnDayViewButton() {
        this.clickOnDomContainText('[title="day view"]', 'day')
    }
    clickOnTodaysDatefield(currentdate) {
        cy.get(`[data-date="${currentdate}"]`).scrollIntoView()
        this.clickOnDomElement(`[data-date="${currentdate}"]`)
    }
    typeEventName(name: any) {
        this.clearTextFieldDom('[placeholder="Add an event"]')
        this.typeTextOnDom('[placeholder="Add an event"]', name)
    }
    setStartTimeas(time) {
        this.clearTheInputFieldAtIndex('[placeholder="hh:mm (a|p)m"]', 0)
        this.typeTextOnDomAtIndex('[placeholder="hh:mm (a|p)m"]', time, 0)
    }
    setEndTimeas(time) {
        this.clearTheInputFieldAtIndex('[placeholder="hh:mm (a|p)m"]', 1)
        this.typeTextOnDomAtIndex('[placeholder="hh:mm (a|p)m"]', time, 1)
    }
    clickOnAddeventButton() {
        this.clickOnDomElement('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1vn7q1e-MuiButtonBase-root-MuiButton-root"]')
    }
    clickOnDeleteEventButton() {
        this.clickOnDomElement('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1knvlb0-MuiButtonBase-root-MuiButton-root"]')
    }
    clickOnNewlyAddedEvent(eventname: any) {
        this.clickOnDomContainText('[class="fc-event-title"]', eventname)
    }
    closeEventDialog() {
        this.clickOnDomElement('[data-testid="CloseIcon"]')
    }
    clickonEditeventButton() {
        this.clickOnDomContainText('button', 'Edit event')
    }
    clickOnEvent(eventname: any) {
        this.clickOnDomContainText('[class="fc-event-title fc-sticky"]', eventname)
    }
}
