function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('daySeven\\inputs.txt', 'utf8');
    var inputs = contents.split(',');
    return inputs;
}

function daySeven() {
    let inputs = readInputs();

    let largestAlignment = Math.max(...inputs);
    let smallestAlignment = Math.min(...inputs);

    let smallestPosition = 0;
    let smallestFuelCount = 0;

    for(let i = smallestAlignment; i <= largestAlignment; i++) {
        let count = 0;
        for(let j = 0; j < inputs.length; j++) {
            let fuelUsage = Math.abs(inputs[j] - i);
            count += (fuelUsage*(fuelUsage+1))/2;
        }

        if(count < smallestFuelCount || smallestFuelCount === 0) {
            smallestFuelCount = count;
            smallestPosition = i;
        }
    }

    console.log(`Smallest Alignment: ${smallestPosition}`);
    console.log(`Smallest Fuel Count: ${smallestFuelCount}`);
}

daySeven();