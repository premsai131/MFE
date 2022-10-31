/// <reference types="Cypress" />
import "../support/index";

export abstract class BaseEyes {
    seesLoginPage() {
        cy.get("#email", { timeout: 60000 })
        cy.get("#submit")
    }
    seesTextWithId(id: string, text: string) {
        cy.get(`#${id}`).should("have.text", text);
        return this;
    }

    seesTextWithindex(dom: string, text: string, value: number) {
        cy.get(dom, { timeout: 20000 }).eq(value).should("be.visible");
        return this;
    }

    doesNotseesTextWithId(id: string, text: string) {
        cy.get(`#${id}`).should("not.have.text", text);
        return this;
    }

    seesIdVisible(id: string) {
        cy.get(`#${id}`, { timeout: 60000 }).should("be.visible");
        return this;
    }

    doesNotseesIdVisible(id: string) {
        cy.get(`#${id}`).should("not.be.visible");
        return this;
    }

    doesNotseesDomVisible(dom: string) {
        cy.get(`${dom}`, { timeout: 60000 }).should("not.be.visible");
        return this;
    }
    doesNotseesDomVisibleWithTimeOut(dom: string, timeout: any) {
        cy.get(`${dom}`, { timeout: timeout }).should("not.be.visible");
        return this;
    }
    doesNotExistDom(dom: string) {
        cy.get(`${dom}`, { timeout: 60000 }).should("not.exist");
        return this;
    }
    doesNotExistDomWithTimeout(dom: string, timeout: any) {
        cy.get(`${dom}`, { timeout: timeout }).should("not.exist");
        return this;
    }
    doesNotExistDomWithText(dom: string, text: any) {
        cy.get(`${dom}`, { timeout: 60000 }).contains(text).should("not.exist");
        return this;
    }
    doesNotseesDomVisibleAtIndex(dom: string, i: number) {
        cy.get(`${dom}`).eq(i).should("not.be.visible");
        return this;
    }

    seesTextWithClass(domClass: string, text: string) {
        cy.get(`.${domClass}`).should("have.text", text);
        return this;
    }

    seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
        cy.get(`[${domlabel}=${matcher}]`).should("be.visible");
        return this;
    }

    seesElementWithDataId(dataId: string) {
        cy.get(`[data-testid*=${dataId}]`).should("be.visible");
        return this;
    }

    doesNotseesElementWithDataId(dataId: string) {
        cy.get(`[data-testid*=${dataId}]`).should("not.be.visible");
        return this;
    }
    seesDomVisiblewithtimeout(domlabel: string, time: any) {
        cy.get(domlabel, { timeout: time }).should("be.visible");
        return this;
    }
    seesDomVisible(domlabel: string) {
        cy.get(domlabel, { timeout: 20000 }).should("be.visible");
        return this;
    }
    seesDomVisibleAfterScroll(domlabel: string) {
        cy.get(domlabel, { timeout: 20000 }).scrollIntoView().should("be.visible");
        return this;
    }
    seesDomVisiblewith1MinTimeOut(domlabel: string) {
        cy.get(domlabel, { timeout: 100000 }).should("be.visible", { force: true });
        return this;
    }
    seesDomWithContains(dom: string) {
        cy.contains(dom, { timeout: 20000 });
        return cy;
    }

    seesDomVisibleAtIndex(domlabel: string, i: any) {
        cy.get(domlabel, { timeout: 60000 }).eq(i).should("be.visible");
        return this;
    }

    seesDomEnableAtIndex(domlabel: string, i: number) {
        cy.get(domlabel).eq(i).should("be.enabled", { force: true });
        return this;
    }

    seesTextContentOnDom(dom: string, text: string) {
        cy.get(dom).should("contain.text", text);
        return this;
    }

    doesNotSeesTextContentOnDom(dom: string, text: string) {
        cy.get(dom).should("not.contain.text", text);
        return this;
    }

    checkTextContentWithIndex(dom: string, i: string, text: string) {
        cy.get(dom).eq(parseInt(i)).should("contain.text", text);
        return this;
    }

    seesTextFieldPlaceholder(dom: string, value: string) {
        cy.get(dom).should("have.attr", "placeholder").and("include", value);
        return this;
    }

    seesDomAttributeValueHave(dom: string, attr: string, value: string) {
        cy.get(dom).should("have.attr", attr).and("include", value);
        return this;
    }
    seesDomAttributeValueContain(dom: string, attr: string, value: string) {
        cy.get(dom).should("have.attr", attr).and("contain", value);
        return this;
    }
    seesDomAttributeValueContainAtIndex(dom: string, attr: string, value: string, i: any) {
        cy.get(dom).eq(i).should("have.attr", attr).and("contain", value);
        return this;
    }
    seesDomAttributeValueNotContainAtIndex(dom: string, attr: string, value: string, i: any) {
        cy.get(dom).eq(i).should("have.attr", attr).and("not.contain", value);
        return this;
    }
    seesDomAttributeValueNotContain(dom: string, attr: string, value: string) {
        cy.get(dom).should("have.attr", attr).and("not.contain", value);
        return this;
    }
    seesDropDownValue(dom: string, value: string) {
        cy.get(dom).should("have.attr", "value").and("include", value);
        return this;
    }

    seesDropDownValueAtIndex(dom: string, i: number, value: string) {
        cy.get(dom).eq(i).should("have.attr", "value").and("include", value);
        return this;
    }
    seesDomValueNotNull(dom: string) {
        cy.get(dom, { timeout: 40000 }).should("not.equal", null)
        return this;
    }
    seesDomValueVisibleNotNull(dom: string) {
        cy.get(dom, { timeout: 5000 }).should('be.visible').should("not.equal", null)
        return this;
    }
    seesDomValueNull(dom: string) {
        cy.get(dom, { timeout: 30000 }).should("equal", null)
        return this;
    }

    seesDomValueNotNullAtIdex(dom: string, i: any) {
        cy.get(dom, { timeout: 30000 }).eq(i).should("not.equal", null)
        return this;
    }
    seesDomsVisibleToLenght(dom: string, l: number) {
        cy.get(dom, { timeout: 15000 }).should("have.length", l);
        return this;
    }

    seesParentDom(dom: string) {
        cy.get(dom).parent().should("be.visible");
        return this;
    }

    seesParentAndChildDom(parentdom: string, childdom: string) {
        cy.get(parentdom).parent().find(childdom).should("be.visible");
        return this;
    }

    seesChildDom(parentdom: string, i: string, childdom: string) {
        cy.get(parentdom).eq(parseInt(i)).find(childdom).should("be.visible");
        return this;
    }

    seesParentsAndChildDomContentText(
        parentdom: string,
        childdom: string,
        i: string,
        value: string
    ) {
        cy.get(parentdom)
            .parent()
            .parent()
            .parent()
            .find(childdom)
            .eq(parseInt(i))
            .should("be.visible")
            .should("have.text", value);
        return this;
    }

    seesParentSiblingsDom(parentdom: string, childdom: string) {
        cy.get(parentdom).parent().siblings(childdom).should("be.visible");
        return this;
    }
    seesParentSiblingsDomWithParent(parentdom: string, childdom: string, parent: string) {
        cy.get(parentdom).parent(parent).siblings(childdom).should("be.visible");
        return this;
    }
    seesParentDomContainTextSiblingsDomWithParent(parentdom: string, childdom: string, parent: string, text: any) {
        cy.get(parentdom).contains(text).parent(parent).siblings(childdom).should("be.visible");
        return this;
    }
    seesParentDomContainTextSiblingsDomWithParentWithScroll(parentdom: string, childdom: string, parent: string, text: any) {
        cy.get(parentdom).contains(text).parent(parent).siblings(childdom).scrollIntoView().should("be.visible");
        return this;
    }

    seesParentSiblingsDomDisabled(parentdom: string, childdom: string) {
        cy.get(parentdom).parent().siblings(childdom).should("be.disabled");
        return this;
    }

    seesParentSiblingsFindDom(parentdom: string, childdom: string) {
        cy.get(parentdom).parent().siblings().find(childdom).should("be.visible");
        return this;
    }
    seesTitleVisible(title: any) {
        cy.get(`[title="${title}"]`).should('be.visible')
        return this;
    }

    seesParentAndChildDomContentText(
        parentdom: string,
        childdom: string,
        i: string,
        value: string
    ) {
        cy.get(parentdom)
            .parent()
            .find(childdom)
            .eq(parseInt(i))
            .should("have.text", value);
        return this;
    }

    seesTextInChildDom(parentDom: string, childDom: string, text: string) {
        cy.get(`${parentDom} ${childDom}`).should("contain", text);
        return this;
    }

    seesTextWithClassAndIndex(domClass: string, index: number, text: string) {
        cy.get(`.${domClass}`).eq(index).should("have.text", text);
        return this;
    }

    hasLengthForDomWithClass(domClass: string, length: number) {
        cy.get(`.${domClass}`).should("have.length", length);
        return this;
    }

    hasLengthForDom(parentDomClass: string, childDom: string, length: number) {
        cy.get(parentDomClass).find(childDom).should("have.length", length);
        return this;
    }

    seesTextVisble(text: string) {
        cy.contains(text, { timeout: 20000 }).should("be.visible");
        return this;
    }
    seesTextVisibleAfterScoll(text: string) {
        cy.contains(text, { timeout: 10000 }).scrollIntoView().should("be.visible");
        return this;
    }
    seesDomContainText(dom: string, text: string) {
        cy.get(dom, { timeout: 60000 }).should("contain", text);
        return this;
    }
    seesDomContainTextWithTimeOut(dom: string, text: string, timeout: any) {
        cy.get(dom, { timeout: timeout }).should("contain", text);
        return this;
    }
    seesDomContainTextWithtwentysecondsTimeout(dom: string, text: string) {
        cy.get(dom, { timeout: 30000 }).should("contain", text);
        return this;
    }
    seesDomContainTextVisible(dom: string, text: string) {
        cy.get(dom, { timeout: 3000 }).should("contain", text);
        return this;
    }
    seesDomContainTextAfterScroll(dom: string, text: string) {
        cy.get(dom, { timeout: 3000 }).scrollIntoView().should("contain", text);
    }

    seesDomContainTextDisabled(dom: string, text: string) {
        cy.get(dom, { timeout: 60000 }).should("contain", text).should('be.disabled');
        return this;
    }

    seesDomChild(dom: string, child: string, value: string) {
        cy.get(dom)
            .children()
            .eq(1)
            .find(child)
            .should("be.visible")
            .should("have.text", value);
        return this;
    }

    seesDomContainTextAtIndex(dom: string, i: number, text: string) {
        cy.get(dom).eq(i).should("contain", text);
        return this;
    }

    doesNotseesDom(dom: string) {
        cy.get(dom, { timeout: 10000 }).should("not.be.visible");
        return this;
    }
    doesNotseesDomWithText(dom: string, text: string) {
        cy.get(dom, { timeout: 10000 }).should("contain", text).should("not.be.visible");
        return this;
    }
    doesNotseesDomAtIndex(dom: string, i: string) {
        cy.get(dom).eq(parseInt(i)).should("not.be.visible");
        return this;
    }

    seesTextInAgGridCell(rowId: string, colId: string, text: string) {
        cy.get(`[row-id=${rowId}]`)
            .find(`[col-id=${colId}]`)
            .should("have.text", text);
        return this;
    }

    seesAgGridColumnSelected(rowId: string, colId: string) {
        cy.get(`[row-id=${rowId}]`)
            .find(`[col-id=${colId}]`)
            .should("have.class", "ag-cell-range-selected");
        return this;
    }

    seesAgGridRowSelected(rowIndexId: string) {
        cy.get(`[aria-rowindex=${rowIndexId}]`).should(
            "have.class",
            "ag-row-selected"
        );
        return this;
    }

    seesMinimumNumberOfElementsInDom(
        dom: string,
        childDomClass: string,
        minimumLength: number
    ) {
        cy.get(dom)
            .find(`.${childDomClass}`)
            .should("have.length.greaterThan", minimumLength);
        return this;
    }

    seesGreaterThanAttributeValue(
        dom: string,
        attr: string,
        minimumLength: number
    ) {
        cy.get(dom, { timeout: 30000 })
            .should("have.attr", attr)
            .should("have.length.greaterThan", minimumLength);
        return this;
    }

    seesNumberOfElementsInDom(
        dom: string,
        childDomClass: string,
        length: number
    ) {
        cy.get(dom).find(`.${childDomClass}`).should("have.length", length);
        return this;
    }

    seesAttributeValue(dom: string, attr: string, value: string) {
        cy.get(dom, { timeout: 20000 }).should("have.attr", attr).should("deep.equal", value)
    }

    seesNumberOfElements(dom: string, length: number) {
        cy.get(dom).should("have.length", length);
        return this;
    }

    seesPathNameInUrl(path: string) {
        cy.location("pathname").should("eq", path);
        return this;
    }

    seesURLPathContainsText(text: string) {
        cy.url({ timeout: 30000 }).should('contains', text);
        return this;
    }

    doesNotSeesURLPathContainsText(text: string) {
        cy.url({ timeout: 30000 }).should('not.contain', text);
        return this;
    }

    seesFullPathNameWithQueryParams(path: string) {
        const HOST = Cypress.env("APP_URL");
        cy.location("href").should("eq", `${HOST}/${path}`);
        return this;
    }

    seesDomDisabled(dom: string) {
        cy.get(dom, { timeout: 20000 }).should("be.disabled");
        return this;
    }

    seesDomDisabledAtIndex(dom: string, i: number) {
        cy.get(dom, { timeout: 20000 }).eq(i).should("be.disabled");
        return this;
    }

    seesDomEnabled(dom: string) {
        cy.get(dom, { timeout: 20000 }).should("not.be.disabled");
        return this;
    }

    seesParentAndSiblingsVisible(child: string, parent: string) {
        cy.get("[alt*='" + child + "']").parent().siblings().children(parent).should("have.text", child);
        return this;
    }
    seesSnackbar(text: string) {
        this.seesDomContainTextWithtwentysecondsTimeout('div[data-testid="snackbar"] span', text)
    }
    seesSnackbarForUpdate(text: string) {
        this.seesDomContainText('div[data-testid="snackbar"] span', text)
    }
    seesSnackbarWithTimeout(text: string, timeout: any) {
        this.seesDomContainTextWithTimeOut('div[data-testid="snackbar"] span', text, timeout)
    }
}

export class BaseHands {

    clickOnId(id: string) {
        cy.get(`#${id}`, { timeout: 160000 }).click();
        return this;
    }

    logoutFunctionality() {
        localStorage.setItem("okta-cache-storage", '');
        localStorage.setItem("okta-token-storage", '');
    }

    clickOnClass(domClass: string) {
        cy.get(`.${domClass}`).click();
        return this;
    }

    typeTextOnDom(dom: string, text: string) {
        cy.get(dom, { timeout: 15000 }).type(text);
        return this;
    }
    typeTextOnDomAfterClick(dom: string, text: string) {
        cy.get(dom, { timeout: 25000 }).click().type(text);
        return this;
    }
    typeTextOnDomwithIndexAfterClick(dom: string, text: string, i: any) {
        cy.get(dom, { timeout: 15000 }).eq(i).click().type(text);
        return this;
    }
    typeTextOnDomAtIndex(dom: string, text: string, i: number) {
        cy.get(dom, { timeout: 20000 }).eq(i).type(text);
        return this;
    }
    typeTextOnDomAtIndexWithArray(dom: string, number: any, i: number) {
        cy.get(dom, { timeout: 15000 }).eq(i).type(number);
        return this;
    }

    typeTextOnClass(domClass: string, text: string) {
        cy.get(`.${domClass}`).type(text, { force: true });
        return this;
    }

    typeTextOnField(dom: string, text: string) {
        cy.get(dom).type(text);
        return this;
    }

    clickoncontaintext(text: string) {
        cy.contains(text).click({ force: true });
        return this;
    }

    clickOnDomContainText(dom: string, text: string) {
        cy.get(dom, { timeout:25000 }).contains(text).trigger('click');
        return this;
    }
    clickOnDomValueEqualToText(dom: any, text: string) {
        cy.get(dom, { timeout: 30000 }).each(ele => {
            if (ele.text() === text) {
                ele.click();
            }
        })
    }
    clickOnDomContainTextwithoutForce(dom: string, text: string) {
        cy.get(dom).contains(text).click();
        return this;
    }
    doubleClickOnId(id: string) {
        cy.get(`#${id}`).dblclick();
        return this;
    }
    doubleClickOndom(dom: string) {
        cy.get(dom).dblclick();
        return this;
    }
    doubleClickAndDragOnAgGrid(rowId: string, colId: string) {
        cy.get(`[row-id=${rowId}]`)
            .find(`[col-id=${colId}]`)
            .trigger("mousedown", { which: 1, pageX: 600, pageY: 100 })
            .trigger("mousemove", { which: 1, pageX: 600, pageY: 600 })
            .trigger("mouseup", { which: 1, pageX: 600, pageY: 6000 });
        return this;
    }


    clickOnDomElementwithForce(dom: string) {
        cy.get(dom, { timeout: 20000 }).click({ force: true });
        return this;
    }
    clickOnDomElement(dom: string) {
        cy.get(dom, { timeout: 20000 }).click();
        return this;
    }
    typeTextOnId(id: string, text: string) {
        cy.get(`#${id}`).type(text, { force: true });
        return this;
    }
    clickOnTitle(title: any) {
        cy.get(`[title="${title}"]`).click();
        return this;
    }
    clickOnChildDom(parentId: string, dom: string, index: number) {
        cy.get(`#${parentId} ${dom}`).eq(index).click();
        return this;
    }
    clickOnTextWithId(domClass: string, text: string) {
        cy.get(`[class=${domClass}]`).click();
        return this;
    }

    ClickOnTextWithDomAndIndex(dom: string, text: string, index: number) {
        cy.get(dom).contains(text).eq(index).click({ force: true });
        return this;
    }
    clickOnElementWithDataId(dataId: string) {
        cy.get(`[data-testid*=${dataId}]`).click();
        return this;
    }
    clickonElementWitDataIdExact(dataId: string) {
        cy.get(`li[data-testid="${dataId}"]`).trigger('click');
        return this;
    }
    clickOnElementWithDataIdAtIndex(dataId: string, i: any) {
        cy.get(`[data-testid*=${dataId}]`).eq(i).click();
        return this;
    }
    clickOnElementWithDataIdAndText(dataId: string, text: string) {
        cy.get(`[data-testid="${text}${dataId}"]`, { timeout: 8000 }).click();
        return this;
    }
    scrollToWithClassName(domClass: string, direction: PositionType) {
        cy.get(`.${domClass}`).scrollTo(direction);
        return this;
    }

    clickOnAgGridRow(rowId: string) {
        cy.get(`[row-id=${rowId}]`).find(".ag-selection-checkbox").click();
        return this;
    }

    wait(milliSecs: number) {
        cy.wait(milliSecs);
        return this;
    }
    clickOnDomElementAtIndexWithoutforce(dom: string, i: number) {
        cy.get(dom, { timeout: 160000 }).eq(i).click();
        return this;
    }

    clickOnDomElementAtIndex(dom: string, i: any) {
        cy.get(dom, { timeout: 70000 }).eq(i).click({ force: true });
        return this;
    }

    clickOnDomElementAtIndexAndTypeField(dom: string, i: any, policy: any) {
        cy.get(dom, { timeout: 70000 }).click({ force: true });
        cy.wait(3000)
        cy.type(policy)
        return this;
    }

    clickOnTextWithDom(domClass: string, text: string) {
        cy.get(domClass, { timeout: 60000 }).contains(text).click({ force: true });
        return this;
    }

    clickOnTextWithDomWithOutForce(domClass: string, text: string) {
        cy.get(domClass, { timeout: 60000 }).contains(text).click();
        return this;
    }

    clickOnParentDomContainTextSiblingsDomWithParent(parentdom: string, childdom: string, parent: string, text: any) {
        cy.get(parentdom).contains(text).parent(parent).siblings(childdom).click();
        return this;
    }

    makeDomVisibleWithScroll(dom: string) {
        cy.get(dom, { timeout: 15000 }).eq(0).scrollIntoView();
        return this;
    }

    goBack(value: any) {
        cy.go(value)
        return this;
    }

    scrollToDomToMakeVisible(dom: string) {
        cy.get(dom).scrollIntoView();
        return this;
    }
    scrollToBottom() {
        cy.scrollTo('bottom')
    }
    logText(text: string) {
        cy.log(text);
        return this;
    }

    clickAndTypeOnDom(dom: string, text: string) {
        cy.get(dom).click().type(text);
        return this;
    }

    clearTextFieldDom(dom: string) {
        cy.get(dom, { timeout: 15000 }).clear({});
        return this;
    }
    returnTextOnDom(dom: string) {
        cy.get(dom, { timeout: 5000 }).then(($div) => {
            const text = $div ? $div.text() : ""
            cy.log(text)
        })
    }
    returnLengthOfDom(dom: string) {
        var a: any = [];
        let b: any;
        cy.get(dom).then(($elem) => {
            b = Cypress.$($elem).length
            for (let i = 1; i < b; i++) {
                cy.get(dom).eq(i).invoke('attr', 'title').then(title => {
                    let val: string = title || ''
                    console.log(val)
                    a.push(val)
                })
            }
        })
        cy.log(a)
        return a;
    }
    returnListTextOnDom(dom: string, i: number) {
        var a: any = [];
        cy.get(dom, { timeout: 20000 }).then(function ($elem) {
            var a: any = a.push($elem.text())
        })
        return a;
    }

    writeTextFile(path: string, text: string) {
        cy.writeFile(path, text, { flag: 'a+' })
    }
    writeJsonFile(path: string, text: string) {
        cy.writeFile(path, text)
    }

    clearTheInputField(dom: string) {
        cy.get(dom).clear()
        return this;
    }
    clearTheInputFieldAndTypeText(dom: string, text: any) {
        cy.get(dom).clear().type(text)
        return this;
    }
    clearTheInputFieldAtIndex(dom: string, index: number) {
        cy.get(dom).eq(index).clear()
        return this;
    }
    setViewPort(model: String) {
        cy.viewport(model);
    }

    clickDomsStepByStep(dom1: string, dom2: string, dom3: string, dom4: string) {
        cy.get(dom1, { timeout: 50000 }).then(function ($el) {
            const vault = $el[$el.length - 1];
            let vaultName = vault.getAttribute(dom2);
            cy.get("#" + vaultName).find(dom3).then(function ($el) {
                $el.click();
                cy.get(dom4).type("" + vaultName);
            })
        })
        return this;
    }

}

export class BaseDependencies {
    visitUrl(url: string) {
        cy.visit(`${url}`, { timeout: 120000 });
        return this;
    }
    accessUrl(url: string) {
        cy.visit(`${url}`);
        return this;
    }

    login() {
        cy.get('[id="username"]',{timeout:40000}).type(Cypress.env('USER_NAME'));
        cy.get('[id="password"]',{timeout:40000}).type(Cypress.env('PASSWORD'));
        cy.get('[data-id="submit-button"]').click();
        return this;
    }
}

type PositionType =
    | "topLeft"
    | "top"
    | "topRight"
    | "left"
    | "center"
    | "right"
    | "bottomLeft"
    | "bottom"
    | "bottomRight";
