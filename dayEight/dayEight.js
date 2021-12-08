function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayEight\\inputs.txt', 'utf8');
    var inputs = contents.split('\r\n');
    var inputs = inputs.map((x) => x.split('|'));
    var inputs = inputs.map((x) => x.map((y) => y.trim()));
    var inputs = inputs.map((x) => x.map((y) => y.split(' ')));

    return inputs;
}

function dayEight() {
    var inputs = readInputs();

    let digitCount = 0;

    let grandTotal = 0;

    inputs.forEach((x) => {
        let output = x[1];
        output.forEach((y) => {
            if (y.length === 2 || y.length === 3 || y.length === 4 || y.length === 7) {
                digitCount++;
            }
        });

        let input = x[0];
        let onePattern = input.find((p) => p.length === 2);
        let sevenPattern = input.find((p) => p.length === 3);
        let eightPattern = input.find((p) => p.length === 7);
        let fourPattern = input.find((p) => p.length === 4);

        let ninePattern = input.filter((p) => {
            if(p.length === 6) {
                if (p.split('').filter((x) => fourPattern.includes(x)).length === 4) {
                    return p[0];
                }
            }
        })[0];

        let zeroPattern = input.filter((p) => {
            if(p.length === 6) {
                if (p.split('').filter((x) => sevenPattern.includes(x)).length === 3) {
                    if(p != ninePattern) {
                        return p;
                    }
                }
            }
        })[0];
 
        let sixPattern = input.filter((p) => {
            if(p.length === 6) {
                if(p != ninePattern && p != zeroPattern) {
                    return p;
                }
            }
        })[0];

        let threePattern = input.filter((p) => {
            if(p.length === 5) {
                if (p.split('').filter((x) => sevenPattern.includes(x)).length === 3) {
                    return p;
                }
            }
        })[0];

        let fivePattern = input.filter((p) => {
            if(p.length === 5) {
                if (p.split('').filter((x) => sixPattern.includes(x)).length === 5) {
                    return p[0];
                }
            }
        })[0];

        let twoPattern = input.filter((p) => {
            if(p.length === 5 && p != fivePattern && p != threePattern) { 
                return p;
            }
        })[0];

        let total = "";

        output.forEach((y) => {
            y = sortString(y);
            if(y == sortString(onePattern)) {
                total += 1;
            } else if(y == sortString(twoPattern)) {
                total += 2;
            } else if(y == sortString(threePattern)) {
                total += 3;
            } else if(y == sortString(fourPattern)) {
                total += 4;
            } else if(y == sortString(fivePattern)) {
                total += 5;
            } else if(y == sortString(sixPattern)) {
                total += 6;
            } else if(y == sortString(sevenPattern)) {
                total += 7;
            } else if(y == sortString(eightPattern)) {
                total += 8;
            } else if(y == sortString(ninePattern)) {
                total += 9;
            } else if(y == sortString(zeroPattern)) {
                total += 0;
            }
        });

        grandTotal += parseInt(total);
    });

    console.log(grandTotal);
}

function sortString(str) {
    return str.split('').sort().join('');
}

dayEight();