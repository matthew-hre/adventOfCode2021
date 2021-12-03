function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayThree\\inputs.txt', 'utf8');
    var inputs = contents.split('\n');
    return inputs;
}

function dayThree() {
    let co2Scrubbing = getCo2Scrubbing();
    let oxygenGen = getOxygenGenerator();

    console.log("Oxygen Generator: " + oxygenGen);

    console.log("Co2 Scrubbing: " + co2Scrubbing);

    co2Decimal = parseInt(co2Scrubbing, 2);
    oxygenDecimal = parseInt(oxygenGen, 2);

    console.log(co2Decimal);
    console.log(oxygenDecimal);
    console.log(co2Decimal * oxygenDecimal);
}

function getOxygenGenerator() {
    let inputArray = readInputs();

    let arrayLength = inputArray[0].length;

    for (let i = 0; i < arrayLength; i++) { // bit 
        let commonOnes = [];
        let commonZeros = [];

        for(let j = 0; j < inputArray.length; j++) {
            if(inputArray[j][i] === '0') {
                commonZeros.push(j);
            } else {
                commonOnes.push(j);
            }
        }

        if(commonOnes.length >= commonZeros.length) {
            inputArray = inputArray.filter(x => x[i] === '1');
        } else {
            inputArray = inputArray.filter(x => x[i] === '0');
        }

        if(inputArray.length === 1) return inputArray;
    }
    return inputArray;
}

function getCo2Scrubbing() {
    let inputArray = readInputs();

    let arrayLength = inputArray[0].length;

    for (let i = 0; i < arrayLength; i++) { // bit 
        let commonOnes = [];
        let commonZeros = [];

        for(let j = 0; j < inputArray.length; j++) {
            if(inputArray[j][i] === '0') {
                commonZeros.push(j);
            } else {
                commonOnes.push(j);
            }
        }

        if(commonZeros.length <= commonOnes.length) {
            inputArray = inputArray.filter(x => x[i] === '0');
        } else {
            inputArray = inputArray.filter(x => x[i] === '1');
        }

        if(inputArray.length === 1) return inputArray;
    }
    return inputArray;

}

dayThree();