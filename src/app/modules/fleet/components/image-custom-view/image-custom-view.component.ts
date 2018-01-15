import { CustomViewInterface } from './../../../_shared/components/local-pagination/lc-custom-view/lc-custom-view.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-custom-view',
  templateUrl: './image-custom-view.component.html',
  styleUrls: ['./image-custom-view.component.scss']
})
export class ImageCustomViewComponent implements OnInit, CustomViewInterface {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
