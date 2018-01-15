import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcCustomViewComponent } from './lc-custom-view.component';

describe('LcCustomViewComponent', () => {
  let component: LcCustomViewComponent;
  let fixture: ComponentFixture<LcCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcCustomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
