import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditLogosComponent } from './edit-logos.component';

describe('EditLogosComponent', () => {
  let component: EditLogosComponent;
  let fixture: ComponentFixture<EditLogosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
