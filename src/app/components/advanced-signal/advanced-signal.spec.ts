import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSignal } from './advanced-signal';

describe('AdvancedSignal', () => {
  let component: AdvancedSignal;
  let fixture: ComponentFixture<AdvancedSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
