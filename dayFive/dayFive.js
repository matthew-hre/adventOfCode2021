function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayFive\\inputs.txt', 'utf8');
    var inputs = contents.split('\r\n');
    inputs = inputs.map(x => x.split(' -> '));
    inputs = inputs.map(x => x.map(y => y.split(',')));
    return inputs;
}

function dayFive() {
    let inputs = readInputs();

    let oceanFloor = create2dFilled();

    for(let vent = 0; vent < inputs.length; vent++) {
        let startingVector = inputs[vent][0];
        let endingVector = inputs[vent][1];

        if(startingVector[0] === endingVector[0]) {
            let newY = parseInt(startingVector[1]);
            while(newY !== parseInt(endingVector[1]) + (Math.sign(parseInt(endingVector[1]) - parseInt(startingVector[1])))) {
                let x = parseInt(startingVector[0]);
                let y = parseInt(newY);
                let yOffset = Math.sign(parseInt(endingVector[1]) - parseInt(startingVector[1]));
                newY += yOffset;
                oceanFloor[y][x] += 1;
            }
        } else if(startingVector[1] === endingVector[1]) {
            let newX = parseInt(startingVector[0]);
            while(newX !== parseInt(endingVector[0]) + (Math.sign(parseInt(endingVector[0]) - parseInt(startingVector[0])))) {
                let x = parseInt(newX);
                let y = parseInt(startingVector[1]);
                let xOffset = Math.sign(parseInt(endingVector[0]) - parseInt(startingVector[0]));
                newX += xOffset;
                oceanFloor[y][x] += 1;
            }
        } else {
            let newX = parseInt(startingVector[0]);
            let newY = parseInt(startingVector[1]);
            while(newX !== parseInt(endingVector[0]) + (Math.sign(parseInt(endingVector[0]) - parseInt(startingVector[0])))) {
                let x = parseInt(newX);
                let y = parseInt(newY);
                let xOffset = Math.sign(parseInt(endingVector[0]) - parseInt(startingVector[0]));
                newX += xOffset;
                let yOffset = Math.sign(parseInt(endingVector[1]) - parseInt(startingVector[1]));
                newY += yOffset;

                oceanFloor[y][x] += 1;
            }
        }
    }
    // filter out the 0s and 1s
    overlapCount = 0;
    for(let i = 0; i < oceanFloor.length; i++) {
        for(let j = 0; j < oceanFloor[i].length; j++) {
            if(oceanFloor[i][j] > 1) {
                overlapCount++;
            }
        }
    }
    console.log("Overlap Count: " + overlapCount);
}

function print2dArray(array) {
    for(let i = 0; i < array.length; i++) {
        let row = array[i];
        let rowString = "";
        for(let j = 0; j < row.length; j++) {
            rowString += row[j] + " ";
        }
        console.log(rowString);
    }
    console.log("\n");
}

function create2dFilled() {

    let oceanFloor = [];
    // create a 1000x1000 2d array, filled with 0s
    for(let i = 0; i < 1000; i++) {
        oceanFloor[i] = [];
        for(let j = 0; j < 1000; j++) {
            oceanFloor[i][j] = 0;
        }
    }
    return oceanFloor;
}

dayFive();