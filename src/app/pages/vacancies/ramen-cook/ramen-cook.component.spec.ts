import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenCookComponent } from './ramen-cook.component';

describe('RamenCookComponent', () => {
  let component: RamenCookComponent;
  let fixture: ComponentFixture<RamenCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamenCookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamenCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
