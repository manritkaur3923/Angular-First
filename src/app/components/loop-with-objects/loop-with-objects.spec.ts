import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopWithObjects } from './loop-with-objects';

describe('LoopWithObjects', () => {
  let component: LoopWithObjects;
  let fixture: ComponentFixture<LoopWithObjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopWithObjects],
    }).compileComponents();

    fixture = TestBed.createComponent(LoopWithObjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
