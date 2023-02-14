import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEditFormComponent } from './faculty-edit-form.component';

describe('FacultyEditFormComponent', () => {
  let component: FacultyEditFormComponent;
  let fixture: ComponentFixture<FacultyEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
