function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayThree\\inputs.txt', 'utf8');
    var inputs = contents.split('\n');
    return inputs;
}

function dayThree() {
    var inputArray = readInputs();
    var gamma = "";
    var epsilon = "";

    for(var j = 0; j < inputArray[0].length-1; j++) {
        commonOnes = 0;
        commonZeros = 0;

        for(var i = 0; i < inputArray.length; i++) {
            if(inputArray[i][j] === '0') {
                commonZeros++;
            } else if(inputArray[i][j] === '1') {
                commonOnes++;
            }
        }

        console.log("commonZeros: " + commonZeros);
        console.log("commonOnes: " + commonOnes);

        if(commonZeros > commonOnes) {
            gamma += '0';
            epsilon += '1';
            console.log("0's are more common, so gamma is now " + gamma);
        } else {
            gamma += '1';
            epsilon += '0';
            console.log("1's are more common, so gamma is now " + gamma);
        }
    }

    var gammaToDecimal = parseInt(gamma, 2);
    var epsilonToDecimal = parseInt(epsilon, 2);

    console.log("gamma, " + gammaToDecimal);
    console.log("epsilon, " + epsilonToDecimal);

    console.log("final, " + (gammaToDecimal * epsilonToDecimal));
}

dayThree();