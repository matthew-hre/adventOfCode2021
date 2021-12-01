function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('C:\\Users\\matth\\Documents\\PROJECTS\\js projects\\adventOfCode2021\\dayOneSonarSweep\\inputs.txt', 'utf8');
    var inputs = contents.split('\n').map(x => parseInt(x));
    return inputs;
}

function convertToSlidingWindows() {
    var inputArray = readInputs();
    var output = [];

    for (var i = 0; i < inputArray.length; i++) {
        if(i === 0) {
            output.push([inputArray[i], inputArray[i + 1], inputArray[i + 2]]); // start case
            continue;
        }
        if(i == inputArray.length - 1) {
            break;
        }
        output.push([inputArray[i - 1], inputArray[i], inputArray[i + 1]]);
    }

    return output;
}

function sumWindows() {
    let windows = convertToSlidingWindows();
    let sums = [];
    for (var i = 0; i < windows.length; i++) {
        sums.push(windows[i].reduce((a, b) => a + b));
    }

    console.log(sums);

    return sums;
}

function sonarSweep() {
    var inputArray = sumWindows();
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