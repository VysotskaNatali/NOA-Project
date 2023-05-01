import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdminDialogComponent } from './auth-admin-dialog.component';

describe('AuthAdminDialogComponent', () => {
  let component: AuthAdminDialogComponent;
  let fixture: ComponentFixture<AuthAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAdminDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
