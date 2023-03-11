import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkSubmissionComponent } from './mark-submission.component';

describe('MarkSubmissionComponent', () => {
  let component: MarkSubmissionComponent;
  let fixture: ComponentFixture<MarkSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
