class TicTacToe {
    constructor() {
    this.fieldValue = "x";
    this.field = [[],[],[]];
    }

    getCurrentPlayerSymbol() {

    return this.fieldValue;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex] = this.fieldValue;

            if(this.fieldValue === "x") this.fieldValue = "o";
            else if (this.fieldValue === "o") this.fieldValue = "x";
    
    }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()) return true;
        else return false;

    }

    getWinner() {
        if(this.field[0][0] && this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2]) {
            return this.field[0][0];
        }
        else if(this.field[1][0] && this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2]) {
            return this.field[1][0];
        }
         else if(this.field[2][0] && this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2]) {
            return this.field[2][0];
        }
         else if(this.field[0][0] && this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0]) {
            return this.field[0][0];
        }
        else if(this.field[0][1] && this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1]) {
            return this.field[0][1];
        }
         else if(this.field[0][2] && this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2]) {
            return this.field[0][2];
        }
        else if(this.field[0][0] && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0];
        }
        else if(this.field[0][2] && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            return this.field[0][2];
        }
        else return null;

    }

    noMoreTurns() {

       for (var i = 0; i <3; i++ ){

        for (var j = 0; j < 3; j++){

            if(!this.field[i][j]) return false;
        }
       }
       return true;

    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner() ) return true;
        else return false;

    }

    getFieldValue(rowIndex, colIndex) {
       return this.field[rowIndex][colIndex] || null;

    }
}

module.exports = TicTacToe;
