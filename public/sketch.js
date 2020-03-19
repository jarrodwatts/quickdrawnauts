function setup() {
    createCanvas(255, 255);
    background(255);

    loadJSON('/rainbow', gotRainbow);
}

function gotRainbow(data) {
    //Source: https://www.youtube.com/watch?v=yLuk0twx8Hc
    let drawing = data.drawing;

    for (let path of drawing) {
        noFill();
        stroke(0);
        strokeWeight(3);
        beginShape();
        for (let i = 0; i < path[0].length; i++) {
            let x = path[0][i];
            let y = path[1][i];
            vertex(x, y);

        }
        endShape();
    }
}