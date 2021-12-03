function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayOne\\inputs.txt', 'utf8');
    var inputs = contents.split('\n').map(x => parseInt(x));
    return inputs;
}

function sonarSweep() {
    var inputArray = readInputs();
    var output = inputArray.reduce((prev, curr, currIdx, arr) => {
        if (currIdx === 0) {
            return 0;
        }
        if (curr > arr[currIdx - 1]) {
            return prev + 1;
        }
        return prev;
    }, 0);

    console.log("sonar sweep increases: " + output);
}

sonarSweep();