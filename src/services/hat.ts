import stateSvc, { StateService } from './state';

const senseHat = require('node-sense-hat');
const LEDs = require("sense-hat-led");

class HatService {
    private eventSchedule: { [key: string]: number } = {};
    private scheduler: NodeJS.Timeout;

    constructor() {
        LEDs.lowLight = true;

        LEDs.setRotation(90);

        this.scheduler = setInterval(this.processSchedule.bind(this), 100);
    }

    get leds() {
        return senseHat.Leds;
    }

    text(text: string, stateCheck: number): void {
        LEDs.showMessage(text, 0.1, COLORS.PURPLE, () => {
            setTimeout(() => this.color(COLORS.PURPLE), 800);
        });
    }

    color(c: Array<number>): void {
        let arr: Array<Array<number>> = [];

        for (let x = 0; x < 64; x++) {
            arr.push(c);
        }

        this.leds.setPixels(arr);
    }

    schedule(event: string, time: number): void {
        this.eventSchedule[event] = time;
    }

    stop(): void {
        clearInterval(this.scheduler);
    }

    private processSchedule(): void {
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
    PURPLE: [88, 50, 168],
    BLACK: [0, 0, 0],
    YELLOW: [255, 196, 0]
}

const hatSvc = new HatService();

process.on('SIGINT', () => {
    console.log("Caught interrupt signal");

    hatSvc.stop();
    hatSvc.color(COLORS.BLACK);

    setTimeout(() => {
        process.exit();
    }, 500);
});

export default hatSvc;