import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2011Component } from './year2011.component';

describe('Year2011Component', () => {
  let component: Year2011Component;
  let fixture: ComponentFixture<Year2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Year2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
