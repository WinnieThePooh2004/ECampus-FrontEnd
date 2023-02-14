import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleEditFormComponent } from './user-role-edit-form.component';

describe('UserRoleEditFormComponent', () => {
  let component: UserRoleEditFormComponent;
  let fixture: ComponentFixture<UserRoleEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
