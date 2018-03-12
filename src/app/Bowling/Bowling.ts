
import {Player} from './Player';

export class Bowling {
    numPlayers: number
    players: Player[];
    currentFrame: number;
    currentPlayer: Player;
    currentTry: number;
    inProgress: boolean;
    
    readonly reducer = (accumulator, currentValue) => accumulator + currentValue;

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

    rollTheBall():number {
        var numOfFallen = this.getFallenPins();
        this.currentPlayer.score[this.currentFrame - 1][this.currentTry - 1] = numOfFallen;
        return numOfFallen;
    }

    // check current player's turn end.
    // when current player done, set frame's total score
    isDone():boolean {
        //handle 10th frame bonus try case
        if (this.currentFrame === 10) {
            if(this.currentTry === 4 || //done 3 times, end
                //done 2 try without spare or strike, then end
                (this.currentTry===3 && this.getRemainPins()!==0 && this.currentPlayer.score[9][0]!==10)) { 
                    this.setTotalScore();
                    return true;
            } else {
                this.currentTry++;
                return false;
            }
        } else {
            if (this.currentTry === 2 || this.getRemainPins()===0) {
                this.setTotalScore();
                return true;
            } else {
                this.currentTry++;
                return false;
            }
        }
    }

    isGameOver():boolean  {
        if (this.currentFrame === 10 && this.players.indexOf(this.currentPlayer) === this.numPlayers -1) {
            if (this.currentTry ===4 || 
                (this.currentTry === 3 && this.currentPlayer.score[9].reduce(this.reducer)!==10)) {
                this.setTotalScore();
                return true;
            }
        } 
        return false;
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

    private setTotalScore():void {
        var currentFrameTotal = this.currentPlayer.score[this.currentFrame-1].reduce(this.reducer);
        
        //when player didn't get strike or spare, check previous strike or spare to get bonus score to previous frame
        if(this.currentPlayer.score[this.currentFrame-1][0]!==10 || currentFrameTotal!==10) {
            if (this.currentFrame-1!==0) {  //check previous only if currnet frame is not a first frame
                this.setPreviousScore(this.currentFrame-1);
            }
            //this.currentPlayer.total[this.currentFrame-1] = currentFrameTotal;
            this.currentPlayer.total.push(currentFrameTotal);
        } else {
            this.currentPlayer.total.push(0);
            //this.currentPlayer.total[this.currentFrame-1] = 0;
        }
    }

    private setPreviousScore(frame:number):void {
        if (this.currentPlayer.score[frame-1][0]===10) {
            //when previous strike, add bonus 10 points to previous score
            this.currentPlayer.total[frame-1] = (10 + this.currentPlayer.score[frame].reduce(this.reducer));
            if (frame-1!==0 && this.currentPlayer.score[frame-2][0]===10) {
                //when double in previous, add bouns 20 poins to first strike frame
                this.currentPlayer.total[frame-2] = (20 + this.currentPlayer.score[frame].reduce(this.reducer));
            }
        } else if (this.currentPlayer.score[frame-1].reduce(this.reducer)===10) {
            this.currentPlayer.total[frame-1] = (10 + this.currentPlayer.score[frame][0]);
        }
    }

    private getFallenPins():number {
        var pins = this.getRemainPins();
        var remain = Math.floor (Math.random() * (pins+1));
        return remain;
    }

    private getRemainPins():number {
        if (this.currentTry === 1 || (this.currentFrame === 10 && this.currentTry === 3)) {
            return 10;
        }
        return 10 - (this.currentPlayer.score[this.currentFrame-1].reduce(this.reducer));
    }
    
}