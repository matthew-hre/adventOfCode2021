function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('daySix\\inputs.txt', 'utf8');
    var inputs = contents.split(',');
    var inputs = inputs.map(x => parseInt(x));
    return inputs;
}

function daySix() {
    let inputs = readInputs();

    let fishCount = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
    };
    
    inputs.forEach((fish) => {
        fishCount[fish]++;
    });

    for(let i = 0; i < 256; i++) {
        let newFishCount = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
        };
        for(let i = 8; i >= 0; i--) {
            if(i === 0) {
                newFishCount[8] = fishCount[i];
                newFishCount[6] += fishCount[i];
            }
            newFishCount[i-1] = fishCount[i];
        }   

        fishCount = newFishCount;
    }

    let sum = 0;
    for(let i = 0; i < 9; i++) {
        sum += fishCount[i];
    }   

    console.log(sum);
}

daySix();