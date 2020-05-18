import express from 'express';

const senseHat = require('node-sense-hat');

const app = express();

const matrix = senseHat.Leds;
const RED:Array<number> = [255, 0, 0];
const GREEN:Array<number> = [0, 255, 0];

function blockColour(a:Array<number>):void {
	let screenArr:Array<Array<number>> = [
        a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
	a, a, a, a, a, a, a, a,
    ];

    matrix.setPixels(screenArr);
}

blockColour(RED);

app.listen(8080, () => {
    blockColour(GREEN);

    app.get('/busy', (req, res) => {
        blockColour(RED);
	res.end();
    });

    app.get('/available', (req, res) => {
	blockColour(GREEN);
        res.end();
    });
});
