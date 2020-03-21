function setup() {
    createCanvas(255, 255);
    background(200);

    loadJSON('/rainbow', gotRainbow);
}

function gotRainbow(data) {

    let xCoordsBigPicture = [];
    let yCoordsBigPicture = [];

    //fill in the dummy arrays with 256 zeros.
    for (let penis = 0; penis < 256; penis++) {
        xCoordsBigPicture.push(0);
        yCoordsBigPicture.push(0);
    }

    console.log(xCoordsBigPicture);
    console.log(xCoordsBigPicture.length);


    //Source: https://www.youtube.com/watch?v=yLuk0twx8Hc
    let drawing = data.drawing;
    //Draw the stuff
    for (let path of drawing) {
        noFill();
        stroke(0);
        strokeWeight(3);
        beginShape();

        for (let i = 0; i < path[0].length; i++) {
            let x = path[0][i];
            let y = path[1][i];
            vertex(x, y);

            xCoordsBigPicture[x] = 1;
            yCoordsBigPicture[y] = 1;

        }

        endShape();



    }
    console.log("xCoordsBigPicture:", xCoordsBigPicture);
    console.log("yCoordsBigPicture:", yCoordsBigPicture);


}