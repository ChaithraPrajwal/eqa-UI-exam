import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }
  public static get colsideBar(){
    return $('[class="ag-virtual-list-container ag-column-select-virtual-list-container"]')
  }
  public static get headerContainer(){
    return $('[class="ag-header-container"]')
  }
  public static rowContainer(){return $('[class="ag-center-cols-viewport"]')}
  public static NamesInput(){return $('//input[@aria-label="Name Filter Input"]')}
  public static result(){return $('//div[@class="ag-status-name-value ag-status-panel ag-status-panel-total-and-filtered-row-count""]')}
}
