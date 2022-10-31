import { BaseEyes, BaseHands } from "./BaseRobot";

export class PdpEyes extends BaseEyes{
    seesProductImage(){
        this.seesDomVisible('div>img')
    }
    matchProductTitle(productname:any){
        let producttxt;
        // cy.get('div>h4[class="MuiTypography-root MuiTypography-h4 css-1aswpyn-MuiTypography-root"]').then(txt=>{
        //     producttxt= txt.text()
        //     cy.log(producttxt+2121)
        //     expect(productname).to.eq(producttxt)
        // })
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