import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazyComponent } from './image-lazy.component';

describe('ImageLazyComponent', () => {
  let component: ImageLazyComponent;
  let fixture: ComponentFixture<ImageLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
