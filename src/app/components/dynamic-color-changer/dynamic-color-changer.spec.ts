import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColorChanger } from './dynamic-color-changer';

describe('DynamicColorChanger', () => {
  let component: DynamicColorChanger;
  let fixture: ComponentFixture<DynamicColorChanger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicColorChanger],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicColorChanger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
