function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('C:\\Users\\matth\\Documents\\PROJECTS\\js projects\\adventOfCode2021\\dayTwoDive\\inputs.txt', 'utf8');
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
    let aim = 0;

    for (let i = 0; i < inputArray.length; i++) {
        var dir = inputArray[i].dir;
        var dist = inputArray[i].value;

        if (dir === 'up') {
            aim -= dist;
        } else if (dir === 'down') {
            aim += dist;
        } else if (dir === 'forward') {
            x += dist;
            depth += (aim * dist);
        }
    }

    console.log("final depth: " + depth);
    console.log("final x: " + x);
    console.log("-----------");
    console.log("final answer: " + x * depth);
}

dive();