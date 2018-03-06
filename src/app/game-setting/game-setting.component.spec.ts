import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingComponent } from './game-setting.component';

describe('GameSettingComponent', () => {
  let component: GameSettingComponent;
  let fixture: ComponentFixture<GameSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
