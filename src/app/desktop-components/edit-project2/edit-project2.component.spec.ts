import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProject2Component } from './edit-project2.component';

describe('EditProject2Component', () => {
  let component: EditProject2Component;
  let fixture: ComponentFixture<EditProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProject2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
