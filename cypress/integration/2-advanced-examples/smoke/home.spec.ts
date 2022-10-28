import { forEach } from "cypress/types/lodash";
import { HomePageEyes, HomePageHands } from "../../../robots/homepage"


const homePageEyes = new HomePageEyes();
const homePageHands = new HomePageHands();
let productsCount: any;

describe("Verify homepage elements", () => {
    it('Verify header nav bar elements', () => {
        cy.visit('http://34.134.137.239:9000/')
        Cypress.on('uncaught:exception', (err) => {
            return false
          })
        homePageEyes.seeshomeButtonText()
        homePageEyes.seesCalenderIcon()
        homePageEyes.seesCartIcon()
        homePageEyes.seesAvatarlogo()
    })
    it('Verify products in the main page', () => {
        productsCount = homePageEyes.getProductsCount();
        cy.log(productsCount)
        homePageEyes.seesNewArrivalTextVisible()
        homePageEyes.seesProductImages(productsCount)
        for(let index=0;index<productsCount;index++){
            homePageEyes.seesProductNamesNotNull(index)
            homePageEyes.seesProductRatingtextNotNull(index);
        }
    })
})