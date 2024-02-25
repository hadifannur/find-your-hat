const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

module.exports = class Field {
    constructor(array) {
        this._array = array;
        this._playerPosition = [0,0];
    }

    set playerPosition(str) {
        if (str == "r") {
            this._playerPosition[1]++;
        } else if (str == "l"){
            this._playerPosition[1]--;
        } else if (str == "u"){
            this._playerPosition[0]--;
        } else if (str == "d"){
            this._playerPosition[0]++;
        } else {
            console.log("wrong key");
        }
        
        this._checkResult();
    }

    get playerPosition() {
        return this._playerPosition;
    }

    _checkResult() {
        if(this._playerPosition[0] < 0 || this._playerPosition[0] > this._array.length - 1) {
            console.log('GAMEOVER: YOU MOVE OUTSIDE THE FIELD.')
            return process.exit();
        } else if (this._playerPosition[1] < 0 || this._playerPosition[1] > this._array[0].length - 1) {
            console.log('GAMEOVER: YOU MOVE OUTSIDE THE FIELD.')
            return process.exit();
        }

        let check = this._array[this._playerPosition[0]][this._playerPosition[1]];

        if (check == hole) {
            console.log('GAMEOVER: YOU STEP ON A HOLE');
            process.exit();
        } else if (check == hat) {
            console.log('CONGRATULATIONS! YOU FOUND THE HAT!');
            process.exit();
        } else {
            this._array[this._playerPosition[0]][this._playerPosition[1]] = pathCharacter;
            this.print()
        }
    }

    print() {
        for (const line of this._array) {
            console.log(line.join(' '));
        }
    }
}