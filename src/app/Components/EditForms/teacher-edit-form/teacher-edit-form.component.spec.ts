import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditFormComponent } from './teacher-edit-form.component';

describe('TeacherEditFormComponent', () => {
  let component: TeacherEditFormComponent;
  let fixture: ComponentFixture<TeacherEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
