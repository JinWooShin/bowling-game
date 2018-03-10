export class Player {
    score: number[][];
    name: string;
    total: number[];

    constructor(name: string) {
        this.name = name;
        this.score = Array.apply(null, Array(10)).map((x,i)=>{return [0,0,0]});
        //this.total = Array.apply(null, Array(10)).map((x,i)=>{return 0});
        this.total = [];
    }
}