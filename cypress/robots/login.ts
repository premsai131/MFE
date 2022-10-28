import { BaseEyes, BaseHands } from "./BaseRobot";


export class LoginEyes extends BaseEyes {
    seesPingIdentityLogo() {
        this.seesDomVisible('[alt="Company Logo"]')
    }
    seesUsernameInputField() {
        this.seesDomVisible('[id="username"]')
    }
    seesPasswordInputField() {
        this.seesDomVisible('[id="password"]')
    }
    seesSignOnButton() {
        this.seesDomContainText('[data-id="submit-button"]', 'Sign On')
    }
}
export class LoginHands extends BaseHands {
    typeUsername() {
        this.typeTextOnDomAfterClick('[id="username"]', 'react_tester')
    }
    typePassword() {
        this.typeTextOnDomAfterClick('[id="password"]', 'Prince@16')
    }
    clickOnSignOnButton() {
        this.clickOnDomContainText('[data-id="submit-button"]', 'Sign On')
    }
}