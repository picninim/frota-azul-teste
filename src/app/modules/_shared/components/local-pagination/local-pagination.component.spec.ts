import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPaginationComponent } from './local-pagination.component';

describe('LocalPaginationComponent', () => {
  let component: LocalPaginationComponent;
  let fixture: ComponentFixture<LocalPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
