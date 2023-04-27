import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WokCookComponent } from './wok-cook.component';

describe('WokCookComponent', () => {
  let component: WokCookComponent;
  let fixture: ComponentFixture<WokCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WokCookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WokCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
