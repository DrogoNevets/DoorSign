import { Z_STREAM_END } from "zlib";

const senseHat = require('node-sense-hat');
var sense = require("sense-hat-led").sync;

class HatService {
    constructor() {
        sense.lowLight = true;
    }

    get leds() {
        return senseHat.Leds;
    }

    color(c: Array<number>): void {
        let arr: Array<Array<number>> = [];

        for (let x = 0; x < 64; x++) {
            arr.push(c);
        }

        this.leds.setPixels(arr);
    }
}

export const COLORS = {
    GREEN: [0, 255, 0],
    RED: [255, 0, 0],
    BLACK: [0, 0, 0]
}

const hatSvc = new HatService();

process.on('SIGINT', () => {
    console.log("Caught interrupt signal");

    hatSvc.color(COLORS.BLACK);

    process.exit();
});

export default hatSvc;