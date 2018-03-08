import { Component, OnInit, Input } from '@angular/core';
import { Bowling } from '../Bowling/Bowling';

@Component({
  selector: 'app-gamepanel',
  templateUrl: './gamepanel.component.html',
  styleUrls: ['./gamepanel.component.scss']
})
export class GamepanelComponent implements OnInit {
  @Input() bowlingGame:Bowling;
  fallen: number;
  constructor() { }

  ngOnInit() {
  }

  rollBall() {
    this.fallen = this.bowlingGame.rollTheBall();
    if (this.bowlingGame.isDone() && !this.bowlingGame.isGameOver()) {
      this.bowlingGame.nextPlayer();
    }
  }
}
