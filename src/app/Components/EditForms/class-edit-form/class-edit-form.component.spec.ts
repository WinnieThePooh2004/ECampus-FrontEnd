import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEditFormComponent } from './class-edit-form.component';

describe('ClassEditFormComponent', () => {
  let component: ClassEditFormComponent;
  let fixture: ComponentFixture<ClassEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
