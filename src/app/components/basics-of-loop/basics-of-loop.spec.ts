import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsOfLoop } from './basics-of-loop';

describe('BasicsOfLoop', () => {
  let component: BasicsOfLoop;
  let fixture: ComponentFixture<BasicsOfLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsOfLoop],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicsOfLoop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
