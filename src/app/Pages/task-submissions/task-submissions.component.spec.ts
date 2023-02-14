import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSubmissionsComponent } from './task-submissions.component';

describe('TaskSubmissionsComponent', () => {
  let component: TaskSubmissionsComponent;
  let fixture: ComponentFixture<TaskSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSubmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
