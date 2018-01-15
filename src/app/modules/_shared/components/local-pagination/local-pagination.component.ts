import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import * as _ from 'lodash';

import { LocalPaginationConfig } from './local-pagination-config';
import { Utils } from './../../utils/utils';

@Component({
  selector: 'app-local-pagination',
  templateUrl: './local-pagination.component.html',
  styleUrls: ['./local-pagination.component.scss']
})
export class LocalPaginationComponent implements OnInit, OnChanges {
  @Input('data') data: any[];
  @Input('config') config: LocalPaginationConfig;

  constructor() {

  }

  // Definitions
  public tableConfig: LocalPaginationConfig = new LocalPaginationConfig();
  public page: any[];
  public ruler: any[] = [];
  public onPage = 1;
  public selectedElements = [];

  // Private
  private intTableConfig: LocalPaginationConfig = {
    headers: [],
    selectable: false,
    pageSize: 10,
    currentPage: 1,
    rulerSize: 3
  };

  private mergeConfigs() {
    _.merge(this.tableConfig, this.intTableConfig, this.config);
  }

  // Pages controller
  getPageFor(page: number) {
    const viewPage = this.data.slice(( page * this.tableConfig.pageSize ) - this.tableConfig.pageSize, page * this.tableConfig.pageSize);
    return viewPage;
  }

  setPage() {
    this.page = this.getPageFor(this.onPage);
  }

  goToPage(page) {
    this.onPage = page;
    this.setPage();
    this.setRuler();
  }

  // Ruler Controller

  setRuler() {
    this.ruler = this.getRulerForPage(this.onPage);
  }

  getRulerForPage(page: number) {
    let viewRuler = [];
      const ruler = this.getTotalRuler();
      const rulerPage = Math.floor((page + this.tableConfig.rulerSize - 1) / this.tableConfig.rulerSize);
      viewRuler = ruler.slice(
        ( rulerPage * this.tableConfig.rulerSize ) - this.tableConfig.rulerSize, rulerPage * this.tableConfig.rulerSize
      );
    return viewRuler;
  }

  getTotalRuler() {
    const totalData = this.data.length;
    const rulerTotalSize = Math.floor(totalData % this.tableConfig.pageSize) === 0 ?
      totalData / this.tableConfig.pageSize : (totalData / this.tableConfig.pageSize) + 1;
    return _.range(1, rulerTotalSize);
  }

  jumpRuler(count: number) {
    const rulers = this.getRulerStatus().fullRuler;
    const currentIndex = this.getRulerStatus().currentRulerIndex;
    // tslint:disable-next-line:no-unused-expression
    rulers[currentIndex + count] && this.goToPage(rulers[currentIndex + count][0]);
  }

  getRulerStatus(): { fullRuler: any[], currentRulerIndex: number } {
    const rulers = Utils.gropArrayBy(this.getTotalRuler(), this.tableConfig.rulerSize);
    const currentIndex = _.findIndex(rulers, (ruler) =>  ruler[0] === this.ruler[0] );
    return {fullRuler: rulers, currentRulerIndex: currentIndex};
  }

  // Selection Cotroller

  isSelected( item: any ): boolean {
    return this.selectedElements.indexOf(item) >= 0;
  }

  selectItem(item: any) {
    this.selectedElements.push(item);
  }

  unSelectItem(item: any) {
    this.selectedElements.splice(this.selectedElements.indexOf(item), 1);
  }

  toogleSelect(item: any) {
    this.isSelected(item) ? this.unSelectItem(item) : this.selectItem(item);
  }

  isAllSelect() {
    let is: boolean;
    for ( const item of this.page ) {
      if ( !this.isSelected(item) ) {
        is = false;
        break;
      } else {
        is = true;
      }
    }
    return is;
  }

  toogleSelectAll() {
    if ( this.isAllSelect() ) {
      for ( const item of this.page ) {
        // tslint:disable-next-line:no-unused-expression
        this.isSelected(item) && this.unSelectItem(item);
      }
    } else {
      for ( const item of this.page ) {
        // tslint:disable-next-line:no-unused-expression
        !this.isSelected(item) && this.selectItem(item);
      }
    }

  }

  // Life Cilcles

  ngOnInit() {
    this.mergeConfigs();
    this.onPage = this.tableConfig.currentPage;
  }

  ngOnChanges(e) {
    const data: SimpleChange = e.data;
    if (data && data.currentValue) {
      this.onPage = this.getPageFor(this.onPage).length > 0 ? this.onPage : 1;
      this.goToPage(this.onPage);
    }
  }
}
