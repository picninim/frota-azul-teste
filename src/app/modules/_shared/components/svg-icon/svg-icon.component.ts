import { Component, OnInit, Input, OnChanges, ElementRef, ViewEncapsulation, Renderer} from '@angular/core';

import { SVGICONS } from './svg-icons';

@Component({
  selector: 'app-svg-icon',
  template: '<span class="svg-icon-container" [innerHTML]="svg | safeHtml"></span>',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SvgIconComponent implements OnInit, OnChanges {

  @Input() icon: string;

  private prefix: string;
  public svg: string;
  public class: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
    this.prefix = 'svg';
  }

  render() {
    this.svg = SVGICONS[this.icon];
    this.renderer.setElementClass(this.elementRef.nativeElement, this.class, false);
    this.class = `${this.prefix}-${this.icon}`;
    this.renderer.setElementClass(this.elementRef.nativeElement, this.class, true);
  }

  ngOnChanges() {
    this.render();
  }

  ngOnInit() {
    this.render();
  }
}
