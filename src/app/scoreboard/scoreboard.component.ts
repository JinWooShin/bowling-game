import { Component, OnInit, Input } from '@angular/core';
import {Player} from "../Bowling/Player";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() players:Player[];
  
  constructor() { }

  ngOnInit() {
  }

}
