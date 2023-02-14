import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTaskEditFormComponent } from './course-task-edit-form.component';

describe('CourseTaskEditFormComponent', () => {
  let component: CourseTaskEditFormComponent;
  let fixture: ComponentFixture<CourseTaskEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTaskEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTaskEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
