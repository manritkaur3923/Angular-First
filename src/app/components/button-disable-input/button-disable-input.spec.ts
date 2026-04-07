import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisableInput } from './button-disable-input';

describe('ButtonDisableInput', () => {
  let component: ButtonDisableInput;
  let fixture: ComponentFixture<ButtonDisableInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDisableInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDisableInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
