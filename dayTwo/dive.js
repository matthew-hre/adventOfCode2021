function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayTwo\\inputs.txt', 'utf8');
    var inputs = contents.split('\n');
    console.log(inputs[0]);
    return inputs.map(x => {
        const parts = x.split(" ");
        return {'dir': parts[0], 'value': parseInt(parts[1])};
    });
}

function dive() {
    var inputArray = readInputs();
    let depth = 0;
    let x = 0;

    for (let i = 0; i < inputArray.length; i++) {
        var dir = inputArray[i].dir;
        var dist = inputArray[i].value;

        if (dir === 'up') {
            depth -= dist;
        } else if (dir === 'down') {
            depth += dist;
        } else if (dir === 'forward') {
            x += dist;
        }
    }

    console.log("final depth: " + depth);
    console.log("final x: " + x);
    console.log("-----------");
    console.log("final answer: " + x * depth);
}

dive();