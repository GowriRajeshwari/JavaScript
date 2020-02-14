const readline = require('readline-sync');
class TicTacToe
{
    constructor(){
        this.player=0;   
        this.isempty = "true";
        this.board = [[]];
    }

    initialboard(){
       // var board = new board(3);
        for (var i = 0; i < 3; i++) { 
            this.board[i] = [[]]; 
        } 
        for(let i=0;i<this.board.length;i++){
            for(let j=0;j<this.board.length;j++){
                this.board[i][j]=-10;
            }
        }
        this.displayboard();
    }
    displayboard(){
        let count=0;
        for( let i=0;i<this.board.length;i++)
        {

            console.log("---------------");
            console.log("||");
            for(let j=0;j<this.board.length;j++){
                if(this.board[i][j] == 0 )
                {
                    count++;
                    console.log(" O |");
                }
                else if(this.board[i][j] == 1){
                    count++;
                    console.log(" X |");
                }
                else{
                    console.log("   |");
                }
            }
        }
        if(count == 9){
            this.isempty="false";
        }
        console.log("---------------");
    }
    putval(){
        let i,j;
        if(this.player % 2 == 1){
            i=parseInt((Math.random() * 10) % 3);
            j=parseInt((Math.random() * 10) % 3);
        }
        else{
            console.log("enter the value for x and y");
            i=readline.questionInt();
            j=readline.questionInt();
        }
        if(this.board[i][j] == -10){
            if(this.player % 2 == 0){
                this.board[i][j] = 0;
            }
            else{
                this.board[i][j] = 1;
                console.log("Computer Choosing"+ i +","+ j);
            }
        }
        else{
            this.putval();
        }
    }
    win(){
        return ((this.board[0][0] + this.board[0][1] + this.board[0][2] == this.player * 3)
				|| (this.board[1][0] + this.board[1][1] + this.board[1][2] == this.player * 3)
				|| (this.board[2][0] + this.board[2][1] + this.board[2][2] == this.player * 3)
				|| (this.board[0][0] + this.board[1][0] + this.board[2][0] == this.player * 3)
				|| (this.board[0][1] + this.board[1][1] + this.board[2][1] == this.player * 3)
				|| (this.board[0][2] + this.board[1][2] + this.board[2][2] == this.player * 3)
				|| (this.board[0][0] + this.board[1][1] + this.board[2][2] == this.player * 3)
				|| (this.board[2][0] + this.board[1][1] + this.board[0][2] == this.player * 3));
    }
    play(){
        this.initialboard();
        while(this.isempty == "true"){
           console.log("Player turn");
            this.putval();
            this.displayboard();
            
            if(this.win()){
                console.log("player wons");
                break;
            }
            this.player=1;
            console.log("Computer turn");
            this.putval();
            this.displayboard();
            
            if(this.win()){
                console.log("Computer wons");
                break;
            }
            this.player=0;
        }
        console.log("Draw Match");
        break;

    }
}
module.exports = {
    TicTacToe

}