import { Component, OnInit, Input } from '@angular/core';
import { Bowling } from "../Bowling/Bowling";
import { Player } from "../Bowling/Player";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})

export class ScoreboardComponent implements OnInit {
  @Input() bowlingGame:Bowling;
  readonly reducer = (accumulator, currentValue) => accumulator + currentValue;
  total: number[];
  constructor() { }

  ngOnInit() {
    this.total = [];
  }

  isCurrent(player, currentTry, frame): boolean {
    if (this.bowlingGame.currentTry === currentTry &&
      this.bowlingGame.currentPlayer === player &&
      this.bowlingGame.currentFrame === frame) {
        return true;
      } else {
        return false;
      }
  }
  getScore(pins:number[], currentTry:number, last:boolean):string {
    var score="";
    switch(pins[currentTry]) {
      case 10:
        if (currentTry===0) {
          score="X";
        } else {
          score="/";
        }
        break;
      case 0:
        score="-";
        break;
      default:
        if(currentTry===0 || currentTry===2) {
          score=pins[currentTry].toString();
        } else {
          if (pins[currentTry]+pins[currentTry-1]===10) {
            score="/";
          } else {
            score=pins[currentTry].toString();
          }
        }
    }
    return score;
  }
  getTotal(player:Player, currentFrame) {
    var total = 0; 
    for (var i=0; i<=currentFrame; i++) {
      if(player.total.length>=i) {
        total+=player.total[i];
      }
    }
    return total.toString();;
  }
}
