import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlinggameComponent } from './bowlinggame.component';

describe('BowlinggameComponent', () => {
  let component: BowlinggameComponent;
  let fixture: ComponentFixture<BowlinggameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlinggameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlinggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
