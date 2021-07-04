import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
    it("Should Validate Primary Column Headers", () => {
      /**
     * The function iterates through the element array
     * and checks if coloumn head has specified names.
     */
    const texts=['Participant',
      'Game of Choice',
      'Performance',
      'Monthly Breakdown']
    let col=GridPage.columnHeader[1].$$('div')
    for (let i=0; i<col.length-1;i++){
      
      expect(col[i].getAttribute('role')).to.eql(texts[i])
      
    }
      
      
      });
      it("Should Validate  Column side bar", () => {
        /**
       * The function iterates through the element array
       * and checks if coloumn side bar has primary headr names.
       */
      const texts=['Participant',
        'Game of Choice',
        'Performance',
        'Monthly Breakdown']
      let sidecol=GridPage.colsideBar.$$('div')
      for (let i=0; i<sidecol.length-1;i++){
        
        expect($('//'+sidecol[i]+'/div/div/span[1]/span').getText()).to.eql(texts[i])
        
      }
        });
  
        it("Should fetch secondary column values and veiry them in Column side bar", () => {
          /**
         * The function iterates through the element array
         * and checks if coloumn side bar has secondary header names.
         */

        let secCol=$('//'+GridPage.headerContainer+'div[1]').$$('div')
        let sideCol=GridPage.colsideBar.$$('div')
        for (let i=0; i<secCol.length-1;i++){
          
          expect(secCol[i].getAttribute('role')).to.eql($('//'+sideCol[i]+'/div/span/span').getText())
          
        }
          }); 
          it("Should validate result of name filter", () => {
            /**
           * The function iterates through the element array
           * and checks if result of name filter is displayed.
           */
  
          let names=['Gil',
            'Tony',
            'Isabella',
            'Poppy'
            ]
            let rows=$('//'+GridPage.rowContainer+'/div').$$('div')
            for(let j=0;j<names.length;j++){
              $(GridPage.NamesInput).setValue(names[j])
              expect(rows.length).to.gte(2);

            }
            /**let abort=false
            for(let i=1; i<rows.length;i++){
              for(let j=0;j<names.length;j++){
                if((($('//'+rows[i]+'/div/div/div[1]/span').getText()).split(' '))[0]==names[j]){
                  $('//'+rows[i]+'/div/div/div[1]/span').click()
                }
              }
            }*/

            });
            it("Should verify wiinings in OCT", () => {
              /**
             * The function iterates through the element array
             * and checks if winnning in OCT is less than 5000.
             */
    
            
            let val=$('//'+GridPage.result+'/span[1]').getText()
            let secCol=$('//'+GridPage.headerContainer+'div[1]').$$('div')
            for (let i=0; i<secCol.length-1;i++){
              
              if($('//'+secCol[i]+'/div/span/span').getText()=='Oct'){
                $('//'+secCol[i]+'/div/div/div').click()
                expect(val).to.lte(5000)
              }
              
            }
              });    
  });
});
