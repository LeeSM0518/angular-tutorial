import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-time-display',
    templateUrl: './time-display.component.html',
    styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit, OnChanges {

    constructor() {
    }

    min = 0;
    sec = 0;
    ms = 0;

    timeInterval;

    @Input() inputData: string;

    ngOnInit(): void {
    }

    timeStop(): void{
        clearInterval(this.timeInterval);
    }

    timeReset(): void {
        this.timeStop();
        this.ms = 0;
    }

    timeStart(): void {
        this.timeInterval = setInterval(() => {
            this.ms++;
        }, 10);
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            if (propName === 'inputData') {
                switch (changes[propName].currentValue) {
                    case 'start':
                        this.timeStart();
                        break;
                    case 'stop':
                        this.timeStop();
                        break;
                    case 'reset':
                        this.timeReset();
                        break;
                }
            }
        }
    }

}
