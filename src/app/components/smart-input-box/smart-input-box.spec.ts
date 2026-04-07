import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInputBox } from './smart-input-box';

describe('SmartInputBox', () => {
  let component: SmartInputBox;
  let fixture: ComponentFixture<SmartInputBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartInputBox],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartInputBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
