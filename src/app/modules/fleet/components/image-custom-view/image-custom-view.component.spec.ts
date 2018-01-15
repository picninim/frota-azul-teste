import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCustomViewComponent } from './image-custom-view.component';

describe('ImageCustomViewComponent', () => {
  let component: ImageCustomViewComponent;
  let fixture: ComponentFixture<ImageCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCustomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
