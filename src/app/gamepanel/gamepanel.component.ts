import { Component, OnInit, Input } from '@angular/core';
import { Bowling } from '../Bowling/Bowling';

@Component({
  selector: 'app-gamepanel',
  templateUrl: './gamepanel.component.html',
  styleUrls: ['./gamepanel.component.scss']
})
export class GamepanelComponent implements OnInit {
  @Input() bowlingGame:Bowling;
  constructor() { }

  ngOnInit() {
  }

  rollBall() {
    if (this.bowlingGame.isGameOver()) {

    } else {
      this.bowlingGame.rollTheBall();
      if (this.bowlingGame.isDone()) {
        this.bowlingGame.nextPlayer();
      }
    }
  }
}
