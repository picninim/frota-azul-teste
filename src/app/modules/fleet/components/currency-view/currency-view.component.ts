import { CustomViewInterface } from './../../../_shared/components/local-pagination/lc-custom-view/lc-custom-view.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.scss']
})
export class CurrencyViewComponent implements OnInit, CustomViewInterface {
  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }

}
