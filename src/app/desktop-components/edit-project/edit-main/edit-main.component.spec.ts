import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMainComponent } from './edit-main.component';

describe('EditTitleComponent', () => {
  let component: EditMainComponent;
  let fixture: ComponentFixture<EditMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
