import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriesComponent } from './auditories.component';

describe('AuditoriesComponent', () => {
  let component: AuditoriesComponent;
  let fixture: ComponentFixture<AuditoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
