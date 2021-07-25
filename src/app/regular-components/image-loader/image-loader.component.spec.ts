import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageLoaderComponent } from './image-loader.component';

describe('ImageLoaderComponent', () => {
  let component: ImageLoaderComponent;
  let fixture: ComponentFixture<ImageLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
