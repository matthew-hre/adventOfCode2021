function readInputs() {
    var fs = require('fs');
    var contents = fs.readFileSync('dayNine\\inputs.txt', 'utf8');
    var inputs = contents.split('\r\n');
    var inputs = inputs.map((x) => x.split(''));
    var inputs = inputs.map((x) => x.map((y) => {
        return { "num": parseInt(y), "lowest": false };
    }));
    return inputs;
}

function dayNine() {
    let inputs = readInputs();

    let trueCount = 0;

    // loop through each row
    for (let i = 0; i < inputs.length; i++) {
        // loop through each column
        for (let j = 0; j < inputs[i].length; j++) {
            // check the array above

            let isLowest = 4;

            if (i > 0) {
                if (inputs[i][j]["num"] < inputs[i - 1][j]["num"]) {
                    isLowest--;
                }
            } else {
                isLowest--;
            }

            // check the array to the left
            if (j > 0) {
                if (inputs[i][j]["num"] < inputs[i][j - 1]["num"]) {
                    isLowest--;
                }
            } else {
                isLowest--;
            }

            // check the array below
            if (i < inputs.length - 1) {
                if (inputs[i][j]["num"] < inputs[i + 1][j]["num"]) {
                    isLowest--;
                    
                }
            } else {
                isLowest--;
            }

            // check the array to the right
            if (j < inputs[i].length - 1) {
                if (inputs[i][j]["num"] < inputs[i][j + 1]["num"]) {
                    isLowest--;
                }
            } else {
                isLowest--;
            }

            if(isLowest == 0) {
                inputs[i][j]["lowest"] = true;
                if (j < inputs[i].length - 1) inputs[i][j + 1]["lowest"] = false;
                if (i < inputs.length - 1) inputs[i + 1][j]["lowest"] = false;
                if (j > 0) inputs[i][j - 1]["lowest"] = false;
                if (i > 0) inputs[i - 1][j]["lowest"] = false;
            }
        }
    }

    let lowestCoords = [];

    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < inputs[i].length; j++) {
            if(inputs[i][j]["lowest"]) {
                trueCount += (inputs[i][j]["num"] + 1);
                lowestCoords.push([i, j]);
            }
        }
    }
    let basins = [];
    lowestCoords.forEach((x) => {
        let count = 0;
        let newArray = readInputs();
        floodFill(newArray, x[0], x[1]);

        newArray.forEach((y) => {
            // count how many are still -1
            y.forEach((z) => {
                if(z["num"] == -1) count++;
            }); 
        });
        basins.push(count);
    });
    // multiply the contents of basins together
    let total = basins.sort((a, b) => b - a);
    console.log(total[0] * total[1] * total[2]);
    console.log(trueCount);
}

// https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/
const floodFill = (image, sr, sc) => {
    const current = image[sr][sc];
    
    fill(image, sr, sc, current);
    return image;
};

const fill = (image, sr, sc, current) => {
    if(sr < 0) return;
    if(sc < 0) return;
    if(sr > image.length - 1) return;
    if(sc > image[sr].length - 1) return;
    if(image[sr][sc]["num"] === 9 || image[sr][sc]["num"] === -1) return;
    
    image[sr][sc]["num"] = -1;

    fill(image, sr - 1, sc, current);
    fill(image, sr + 1, sc, current);
    fill(image, sr, sc - 1, current);
    fill(image, sr, sc + 1, current);
}

dayNine();