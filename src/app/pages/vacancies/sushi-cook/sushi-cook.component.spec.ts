import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiCookComponent } from './sushi-cook.component';

describe('SushiCookComponent', () => {
  let component: SushiCookComponent;
  let fixture: ComponentFixture<SushiCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiCookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
