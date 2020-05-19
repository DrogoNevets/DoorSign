import stateSvc, { StateService } from './state';

const senseHat = require('node-sense-hat');
var sense = require("sense-hat-led").sync;

class HatService {
    private eventSchedule: { [key: string]: number } = {};

    constructor() {
        sense.lowLight = true;

        setInterval(this.processSchedule.bind(this), 100);
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

    schedule(event: string, time: number) {
        this.eventSchedule[event] = time;
    }

    private processSchedule() {
        Object.entries(this.eventSchedule).forEach((entry) => {
            let [key, value]: [string, number] = entry;
            let now: number = Date.now();

            if (now > value) {
                let parts: Array<string> = key.split(':');

                switch (parts[0]) {
                    case '1':
                        this.color(parts[1].split(',').map(i => parseInt(i)));
                        stateSvc.state = StateService.AVAILABLE
                        break;
                }
            }
        });
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

    setTimeout(() => {
        process.exit()
    }, 2000);
});

export default hatSvc;