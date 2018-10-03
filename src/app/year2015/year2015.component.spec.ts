import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2015Component } from './year2015.component';

describe('Year2015Component', () => {
  let component: Year2015Component;
  let fixture: ComponentFixture<Year2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Year2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
