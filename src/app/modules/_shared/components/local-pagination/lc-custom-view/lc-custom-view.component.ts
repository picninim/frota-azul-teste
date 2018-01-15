import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, Directive, ViewChild, Input } from '@angular/core';


@Directive({
  selector: '[appCustomView]'
})
export class AppCustomViewDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}


@Component({
  selector: 'app-lc-custom-view',
  templateUrl: './lc-custom-view.component.html',
  styleUrls: ['./lc-custom-view.component.scss']
})
export class LcCustomViewComponent implements OnInit {
  @Input('view') view: any;
  @Input('data') data: any;
  @ViewChild( AppCustomViewDirective ) appCustomViewDirective: AppCustomViewDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {

   }

  ngOnInit() {
    this.loadComponent(this.view);
  }

  loadComponent( customView: any ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory( customView );
    const viewContainerRef = this.appCustomViewDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent( componentFactory );
    ( <CustomViewInterface>componentRef.instance ).data = this.data;
  }

}

export interface CustomViewInterface {
  data: any;
}
