
import {Player} from './Player';

export class Bowling {
    numPlayers: number
    players: Player[];
    currentFrame: number;
    currentPlayer: Player;
    currentTry: number;
    inProgress: boolean;

    constructor(player: number) {
        this.numPlayers = player;
        this.inProgress = false;
        this.players = Array.apply(null, Array(player)).map((x,i)=>{return new Player(String.fromCharCode(65+i))});
    }
    
    startGame():void {
        this.currentFrame = 1;
        this.currentPlayer = this.players[0];
        this.currentTry = 1;
        this.inProgress = true;
    }

    setPlayer(names: string[]):void {
        if (names.length !== this.numPlayers) {
            throw new Error("Number of players and number of names do not match");
        }
        for (var i=0; i<names.length; i++) {
            this.players[i].name = names[i];
        }
    }

    rollTheBall():void {
        var numOfFallen = this.getFallenPins();
        this.currentPlayer.score[this.currentFrame - 1][this.currentTry - 1] = numOfFallen;
        this.currentTry++;
    }

    isDone():boolean {
        if (this.currentFrame === 10) {
            if ((this.currentTry === 2 && this.getRemainPins()!==0) || this.currentTry === 3 ) {
                return true;
            } else {
                return false;
            }
        } else {
            if (this.currentTry > 2 || this.getRemainPins()===0) {
                return true;
            } else {
                return false;
            }
        }
    }

    isGameOver():boolean  {
        if (this.currentFrame === 10 && 
            this.players.indexOf(this.currentPlayer) === this.numPlayers -1 && 
            this.isDone()) {
                return true;
            } else {
                return false;
            }
    }

    nextPlayer():void {
        var idx = this.players.indexOf(this.currentPlayer);
        if(idx === this.numPlayers - 1) {
            this.currentPlayer = this.players[0];
            this.currentFrame++;
        } else {
            this.currentPlayer = this.players[idx + 1];
        }
        this.currentTry = 1;
    }

    getScore():void {

    }

    private getFallenPins():number {
        var pins = this.getRemainPins();   
        return Math.floor (Math.random() * (pins+1));
    }

    private getRemainPins():number {
        if (this.currentTry === 1) {
            return 10;
        }
        return 10 - this.currentPlayer.score[this.currentFrame-1][this.currentTry-2];
    }
    
}