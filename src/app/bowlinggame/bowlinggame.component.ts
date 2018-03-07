import { Component, OnInit } from '@angular/core';

import {Bowling} from '../Bowling/Bowling';
import {Player} from '../Bowling/Player';

@Component({
  selector: 'app-bowlinggame',
  templateUrl: './bowlinggame.component.html',
  styleUrls: ['./bowlinggame.component.scss']
})
export class BowlinggameComponent implements OnInit {
  numOfPlayers: number;
  BowlingGame: Bowling;
  gameStart: boolean;
  constructor() { }

  ngOnInit() {
    this.numOfPlayers = 1;
    this.gameStart = false;
  }

  startGame() {
    this.BowlingGame = new Bowling(this.numOfPlayers);
    this.BowlingGame.startGame();
    this.gameStart = true;
  }

  // getPlayers() {
  //   return this.BowlingGame.players;
  // }

}
