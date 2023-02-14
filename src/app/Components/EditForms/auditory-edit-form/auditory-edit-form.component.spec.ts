import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryEditFormComponent } from './auditory-edit-form.component';

describe('AuditoryEditFormComponent', () => {
  let component: AuditoryEditFormComponent;
  let fixture: ComponentFixture<AuditoryEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoryEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
