import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseUI } from './switch-case-ui';

describe('SwitchCaseUI', () => {
  let component: SwitchCaseUI;
  let fixture: ComponentFixture<SwitchCaseUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseUI],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchCaseUI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
