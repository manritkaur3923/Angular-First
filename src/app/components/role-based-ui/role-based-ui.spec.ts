import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedUI } from './role-based-ui';

describe('RoleBasedUI', () => {
  let component: RoleBasedUI;
  let fixture: ComponentFixture<RoleBasedUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleBasedUI],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleBasedUI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
