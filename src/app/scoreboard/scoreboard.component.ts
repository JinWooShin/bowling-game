import { Component, OnInit, Input } from '@angular/core';
import {Bowling} from "../Bowling/Bowling";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() bowlingGame:Bowling;

  constructor() { }

  ngOnInit() {
  }

}
