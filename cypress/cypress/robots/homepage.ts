import { BaseEyes, BaseHands } from "./BaseRobot";



export class HomePageEyes extends BaseEyes {
    seeshomeButtonText() {
        this.seesDomContainText('p', 'Home')
    }
    seesCalenderIcon() {
        this.seesDomVisible('[data-testid="CalendarTodayIcon"]')
    }
    seesCartIcon() {
        this.seesDomVisible('[data-testid="ShoppingCartIcon"]')
    }
    seesAvatarlogo() {
        this.seesDomVisible('[class*="MuiAvatar-root"]')
    }
    getProductsCount() {
        let count=cy.get('button>img').its('length')
            return count
    }
    seesNewArrivalTextVisible(){
        this.seesDomContainText('div>h4','New Arrivals')
    }
    seesProductImages(productsCount:any){
        this.seesDomsVisibleToLenght('button>img',productsCount)
    }
    seesProductNamesNotNull(index:any){
        cy.get('h6>a').eq(index).then(text=>{
            let productName =text.text();
            expect(productName).to.not.equal('null')
        })
    }
    seesProductRatingtextNotNull(index:any){
        cy.get('div>p').eq(index).then(text=>{
            let productRating =text.text();
            expect(productRating).to.not.equal('null')
        })
    }
    getProductNameOf(index:any){
        cy.get('h6>a').eq(1).then(txt=>{
            let producttitle = txt.text();
            return producttitle;
        })
    }
}
export class HomePageHands extends BaseHands {
    clickOnProduct(index:number){
        this.clickOnDomElementAtIndex('h6>a',index)
    }
    clickonHomePageButton(){
        this.clickOnDomContainText('div>p','Home')
    }

}