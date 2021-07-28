import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditUtilsComponent } from './edit-utils.component';

describe('EditLogosComponent', () => {
  let component: EditUtilsComponent;
  let fixture: ComponentFixture<EditUtilsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
