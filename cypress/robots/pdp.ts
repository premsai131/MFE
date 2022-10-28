import { BaseEyes, BaseHands } from "./BaseRobot";

export class PdpEyes extends BaseEyes{
    seesProductImage(){
        this.seesDomVisible('div>img')
    }
    matchProductTitle(productname:any){
        let producttxt;
        cy.get('div>h4').then(txt=>{
            producttxt= txt.text()
            expect(productname).to.match(producttxt)
        })
    }
    seesProductRating(){
        this.seesDomContainText('div>h6','Rating')
    }
    seesAddToCartButton(){
        this.seesDomContainText('button','ADD TO CART')
    }
    seesavailableOffersText(){
        this.seesDomContainText('div>h6','Available offers')
    }
    seesProducuctDescription(){
        this.seesDomContainText('div>h6','Description')
        this.seesDomValueNotNull('div>h6')
    }
    
    }
export class PdpHands extends BaseHands{
    
}