function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('C:\\Users\\matth\\Documents\\PROJECTS\\js projects\\adventOfCode2021\\dayOneSonarSweep\\inputs.txt', 'utf8');
    var inputs = contents.split('\n');
    return inputs;
}

function sonarSweep() {
    var inputArray = readInputs();
    var output = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if(i === 0) {
            continue;
        }

        if(parseInt(inputArray[i]) > parseInt(inputArray[i-1])) {
            output++;
        }
    }

    console.log("sonar sweep increases: " + output);
}

sonarSweep();