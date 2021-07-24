import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogosComponent } from './edit-logos.component';

describe('EditLogosComponent', () => {
  let component: EditLogosComponent;
  let fixture: ComponentFixture<EditLogosComponent>;

  beforeEach(async(() => {
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
