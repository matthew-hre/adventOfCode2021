function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayTen\\inputs.txt', 'utf8');
    var inputs = contents.split('\r\n');
    return inputs;
}

function dayTen() {
    let inputs = readInputs();

    let illegalChars = [];
    let correctOrder = [];

    inputs.forEach((input) => {
        let openingOrder = [];
        let wasWrong = false;

        for(let i = 0; i < input.length; i++) {
            let char = input[i];
            if(char == '<' || char == '{' || char == '[' || char == '(') {
                openingOrder.push(char);
            } else {
                if(char == '>') {
                    if(openingOrder[openingOrder.length - 1] == '<') {
                        openingOrder.pop();
                    } else {
                        console.log("ERROR! wanted the closing of " + openingOrder[openingOrder.length - 1] + " but got a >");
                        illegalChars.push(char);
                        wasWrong = true;

                        break;
                    }

                }
                if(char == '}') {
                    if(openingOrder[openingOrder.length - 1] == '{') {
                        openingOrder.pop();
                    } else {
                        console.log("ERROR! wanted the closing of " + openingOrder[openingOrder.length - 1] + " but got a }");
                        illegalChars.push(char);
                        wasWrong = true;

                        break;
                    }
                }
                if(char == ']') {
                    if(openingOrder[openingOrder.length - 1] == '[') {
                        openingOrder.pop();
                    } else {
                        console.log("ERROR! wanted the closing of " + openingOrder[openingOrder.length - 1] + " but got a ]");
                        illegalChars.push(char);
                        wasWrong = true;

                        break;
                    }
                }
                if(char == ')') {
                    if(openingOrder[openingOrder.length - 1] == '(') {
                        openingOrder.pop();
                    } else {
                        console.log("ERROR! wanted the closing of " + openingOrder[openingOrder.length - 1] + " but got a )");
                        illegalChars.push(char);
                        wasWrong = true;

                        break;
                    }
                }
            }
        }
        if(!wasWrong) {
            correctOrder.push(input);
        }
        console.log("-----");
    });

    let scores = [];

    correctOrder.forEach((input) => {
        let openingOrder = [];
        for(let i = 0; i < input.length; i++) {
            let char = input[i];
            if(char == '<' || char == '{' || char == '[' || char == '(') {
                openingOrder.push(char);
            } else {
                if(char == '>') {
                    if(openingOrder[openingOrder.length - 1] == '<') {
                        openingOrder.pop();
                    }
                }
                if(char == '}') {
                    if(openingOrder[openingOrder.length - 1] == '{') {
                        openingOrder.pop();
                    }
                }
                if(char == ']') {
                    if(openingOrder[openingOrder.length - 1] == '[') {
                        openingOrder.pop();
                    }
                }
                if(char == ')') {
                    if(openingOrder[openingOrder.length - 1] == '(') {
                        openingOrder.pop();
                    }
                }
            }
            if(i == input.length - 1) {
                newOpening = '';
                openingOrder.reverse().forEach((opening) => {
                    if(opening == '<') {
                        newOpening += '>';
                    }
                    if(opening == '{') {
                        newOpening += '}';
                    }
                    if(opening == '[') {
                        newOpening += ']';
                    }
                    if(opening == '(') {
                        newOpening += ')';
                    }
                });
                let score = 0;
                newOpening.split('').forEach((opening) => {
                    score *= 5;
                    if(opening == '>') score += 4;
                    if(opening == '}') score += 3;
                    if(opening == ']') score += 2;
                    if(opening == ')') score += 1;
                });
                scores.push(score);
            }
        }
    });

    console.log("illegal chars score: " + illegalChars.map((x) => {
        if (x == '>') return 25137;
        if (x == '}') return 1197;
        if (x == ']') return 57;
        if (x == ')') return 3;
    }).reduce((a, b) => a + b));

    scores.sort((a, b) => a-b);

    let middleScore = scores[Math.floor(scores.length / 2)];

    console.log("score: " + middleScore);
}

dayTen();