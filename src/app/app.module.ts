import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BowlinggameComponent } from './bowlinggame/bowlinggame.component';
import { GameSettingComponent } from './game-setting/game-setting.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { GamepanelComponent } from './gamepanel/gamepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    BowlinggameComponent,
    GameSettingComponent,
    ScoreboardComponent,
    GamepanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
