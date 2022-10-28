import { before } from "mocha";
import { BaseDependencies } from "../../../robots/BaseRobot";
import { HomePageEyes, HomePageHands } from "../../../robots/homepage";
import { PdpEyes, PdpHands } from "../../../robots/pdp";

const pdpEyes = new PdpEyes()
const pdpHands = new PdpHands()
const homePageEyes = new HomePageEyes();
const homePageHands = new HomePageHands();
const dependancies = new BaseDependencies();

let productsCount:number = 10
context('Verify the product description application page',()=>{
    before("Visting the application page",()=>{
        dependancies.visitUrl(Cypress.env('root_url'))
        homePageEyes.seeshomeButtonText();
    })
    it('Verify redirecting to the pdp page after clicking on any product',()=>{
        const homePageproductName = homePageEyes.getProductNameOf(1);
        homePageHands.clickOnProduct(1);
        pdpEyes.seesProductImage();
        pdpEyes.matchProductTitle(homePageproductName)
        pdpEyes.seesProductRating()
        pdpEyes.seesAddToCartButton()
        pdpEyes.seesavailableOffersText()
        pdpHands.scrollToBottom()
        pdpEyes.seesProducuctDescription()
    })
    it('Verify redirecting to the home page from pdp page',()=>{
        homePageHands.clickonHomePageButton()
        homePageEyes.seesProductImages(productsCount)
    })
})