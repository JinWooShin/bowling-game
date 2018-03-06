
import {Player} from './Player';

export class Bowling {
    numPlayers: number
    players: Player[];
    currentFrame: number;
    currentPlayer: Player;
    currentTry: number;

    constructor(player: number) {
        this.numPlayers = player;
        this.players = Array.apply(null, Array(player)).map((x,i)=>{return new Player(String.fromCharCode(65+i))});
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
    }

    isDone():boolean {
        if (this.currentTry < 2) {
            return true;
        }
        if (this.currentTry > 2) {
            return false;
        } else {
            if (this.currentFrame === 10) {
                if (this.getRemainPins() === 0) {
                    return false;
                } else {
                    return true;
                }
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
        } else {
            this.currentPlayer = this.players[idx + 1];
        }
        this.currentFrame++;
        this.currentTry = 1;
    }

    getScore():void {

    }

    private getFallenPins():number {
        var pins = this.getRemainPins();   
        return Math.floor (Math.random() * pins);
    }

    private getRemainPins():number {
        if (this.currentTry === 1) {
            return 10;
        }
        return 10 - this.currentPlayer.score[this.currentFrame-1][this.currentTry - 1];
    }
    
}