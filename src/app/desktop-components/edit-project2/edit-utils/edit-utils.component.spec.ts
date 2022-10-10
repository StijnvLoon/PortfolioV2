import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtilsComponent } from './edit-utils.component';

describe('EditUtilsComponent', () => {
  let component: EditUtilsComponent;
  let fixture: ComponentFixture<EditUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
