let dice = {
    randomDice: function () {
        return Math.floor(Math.random() * 6) + 1;
    }
}

function playGame(p1, p2, round) {
    let p1Win = 0;
    let p2Win = 0;

    for (let i = 0; i<round; i++) {
        
        p1.p1Roll[i] = dice.randomDice();
        p2.p2Roll[i] = dice.randomDice();

        if(p1.p1Roll[i]>p2.p2Roll[i]){
            p1.p1Result[i] = `Round${i+1}: Win`;
            p2.p2Result[i] = `Round${i+1}: Lose`;
            p1Win++;
        }else if(p2.p2Roll[i]>p1.p1Roll[i]){
            p1.p1Result[i] = `Round${i+1}: Lose`;
            p2.p2Result[i] = `Round${i+1}: Win`;
            p2Win++;
        }else {
            p1.p1Result[i] = `Round${i+1}: Draw`;
            p2.p2Result[i] = `Round${i+1}: Draw`;
        }
    }

    if(p1Win>p2Win){return p1.p1Name;}
    if(p1Win<p2Win){return p2.p2Name;}
    if(p1Win==p2Win){return `Draw!!!`;}
}

let player1 = {
    p1Name: `Prew`,
    p1Roll: [],
    p1Result: []
};

let player2 = {
    p2Name: `Mhai`,
    p2Roll: [],
    p2Result: []
};


console.log(playGame(player1, player2, 2));
console.log(player1);
console.log(player2);