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
  constructor() { }

  ngOnInit() {
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
  getTotal(scores:number[][], currentFrame) {
    var total = 0;
      for (var i=0; i<=currentFrame; i++) {
        var currentTotal =  scores[i].reduce(this.reducer);
        if(i>=1) {
          if (scores[i-1].indexOf(10)===0) {
            currentTotal = 10 + scores[currentFrame].reduce(this.reducer);
          }
          else if (scores[i-1].reduce(this.reducer)===10) {
            currentTotal = 10 + scores[currentFrame][0];
          }
          if (i>=2 && scores[i-2].indexOf(10)===0) {
            currentTotal+=10;
            if (i>=3 && scores[i-3].indexOf(10)===0) {
              currentTotal+=10;
            }
          } 
        }
        total+=currentTotal;
      }
    if((this.bowlingGame.currentFrame === currentFrame+1 && scores[currentFrame].reduce(this.reducer)===10)||
      total===0 ||
      this.bowlingGame.currentFrame<=i) {
      return " ";
    } 
    return total===0?"-":total;
  }
}
