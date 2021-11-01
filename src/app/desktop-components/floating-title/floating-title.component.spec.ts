import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTitleComponent } from './floating-title.component';

describe('FloatingTitleComponent', () => {
  let component: FloatingTitleComponent;
  let fixture: ComponentFixture<FloatingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
