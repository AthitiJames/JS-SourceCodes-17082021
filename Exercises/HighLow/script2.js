function ranDomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

class playGames{
    constructor(num){
        if(num>10||num==0){
            return ``
        }
        let _num = num;
        const _ranNum = ranDomNumber();
        // return this.playGame();
    }
    
    get ranNum(){
        return this._ranNum ;
    }

    get num(){
        return this._num ;
    }

    playGame(){
        if(this._num > this._ranNum){
            return `Too high
                    Number is : ${this._ranNum}`;
        }else if (this._num < this._ranNum){
            return `Too Low
                    Number is : ${this._ranNum}`;
        }else return `You WIN! Number is : ${this._ranNum}`;
    }
}
let pg = new playGames(10)
console.log(pg.playGame());