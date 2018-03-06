import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {
  @Input() numOfPlayers:number;
  constructor() { }

  ngOnInit() {
  }

}
