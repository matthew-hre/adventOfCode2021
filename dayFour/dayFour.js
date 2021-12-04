function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayFour\\inputs.txt', 'utf8');
    var inputs = contents.split('-');
    inputs = inputs.map(x => x.split('\r\n'));
    inputs = inputs.map(x => x.map(y => y.split(' ')));
    inputs = inputs.map(x => x.filter(x => (x.length > 0) && x !== undefined));
    inputs = inputs.map(x => x.map(y => y.filter(y => y.length > 0)));
    inputs = inputs.map(x => x.map(y => y.map(z => parseInt(z))));

    inputs.shift();
    inputs.forEach(x => x.shift());
    inputs.forEach(x => x.pop());
    return inputs;
}

function dayFour(inputs) {
    let numsToDraw = [87,7,82,21,47,88,12,71,24,35,10,90,4,97,30,55,36,74,19,50,23,46,13,44,69,27,2,0,37,33,99,49,77,15,89,98,31,51,22,96,73,94,95,18,52,78,32,83,85,54,75,84,59,25,76,45,20,48,9,28,39,70,63,56,5,68,61,26,58,92,67,53,43,62,17,81,80,66,91,93,41,64,14,8,57,38,34,16,42,11,86,72,40,65,79,6,3,29,60,1];
    let boards = readInputs();
    let checkedBoards = readInputs();
    let boardCount = boards.length;

    for (let nums = 0; nums < numsToDraw.length; nums++) {
        let num = numsToDraw[nums];



        for(let board = 0; board < boards.length; board++) {
            let currentBoard = boards[board];

            for(let y = 0; y < currentBoard.length; y++) {
                for(let x = 0; x < currentBoard[y].length; x++) {
                    if(currentBoard[y][x] === num) {
                        checkedBoards[board][y][x] = 'X';
                    }
                }
            }

            // check bingo

            // iterate through rows

            var bingo = false;
            if(checkedBoards[board][0][0] === 'X' && checkedBoards[board][0][1] === 'X' && checkedBoards[board][0][2] === 'X' && checkedBoards[board][0][3] === 'X' && checkedBoards[board][0][4] === 'X') {
                bingo = true;
            } else if(checkedBoards[board][1][0] === 'X' && checkedBoards[board][1][1] === 'X' && checkedBoards[board][1][2] === 'X' && checkedBoards[board][1][3] === 'X' && checkedBoards[board][1][4] === 'X') {
                bingo = true;
            } else if(checkedBoards[board][2][0] === 'X' && checkedBoards[board][2][1] === 'X' && checkedBoards[board][2][2] === 'X' && checkedBoards[board][2][3] === 'X' && checkedBoards[board][2][4] === 'X') {
                bingo = true;
            } else if(checkedBoards[board][3][0] === 'X' && checkedBoards[board][3][1] === 'X' && checkedBoards[board][3][2] === 'X' && checkedBoards[board][3][3] === 'X' && checkedBoards[board][3][4] === 'X') {
                bingo = true;
            } else if(checkedBoards[board][4][0] === 'X' && checkedBoards[board][4][1] === 'X' && checkedBoards[board][4][2] === 'X' && checkedBoards[board][4][3] === 'X' && checkedBoards[board][4][4] === 'X') {
                bingo = true;
            }

            if(checkedBoards[ board][0][0] === 'X' && checkedBoards[ board][1][0] === 'X' && checkedBoards[ board][2][0] === 'X' && checkedBoards[ board][3][0] === 'X' && checkedBoards[ board][4][0] === 'X') {
                bingo = true;
            } else if(checkedBoards[ board][0][1] === 'X' && checkedBoards[ board][1][1] === 'X' && checkedBoards[ board][2][1] === 'X' && checkedBoards[ board][3][1] === 'X' && checkedBoards[ board][4][1] === 'X') {
                bingo = true;
            } else if(checkedBoards[ board][0][2] === 'X' && checkedBoards[ board][1][2] === 'X' && checkedBoards[ board][2][2] === 'X' && checkedBoards[ board][3][2] === 'X' && checkedBoards[ board][4][2] === 'X') {
                bingo = true;
            } else if(checkedBoards[ board][0][3] === 'X' && checkedBoards[ board][1][3] === 'X' && checkedBoards[ board][2][3] === 'X' && checkedBoards[ board][3][3] === 'X' && checkedBoards[ board][4][3] === 'X') {
                bingo = true;
            } else if(checkedBoards[ board][0][4] === 'X' && checkedBoards[ board][1][4] === 'X' && checkedBoards[ board][2][4] === 'X' && checkedBoards[ board][3][4] === 'X' && checkedBoards[ board][4][4] === 'X') {
                bingo = true;
            }

            if(bingo) {
                console.log(checkedBoards[board]);
                let sum = 0;
                for(let y = 0; y < currentBoard.length; y++) {
                    for(let x = 0; x < currentBoard[y].length; x++) {
                        if(checkedBoards[board][y][x] !== 'X') {
                            sum += checkedBoards[board][y][x];
                        }
                    }
                }

                console.log("removed bingo card " + boardCount + ", num " + num + ", sum " + sum + ", total " + (sum * num));

                boards.splice(board, 1);
                checkedBoards.splice(board, 1);
                boardCount--;
                board--;
            }
        }
    }
}

dayFour();