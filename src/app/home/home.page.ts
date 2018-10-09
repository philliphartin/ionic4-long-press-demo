import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public progress: number = 0;
    public pressState: string = "released";

    // Interval function
    protected interval: any;


    onPress($event) {
        console.log("onPress", $event);
        this.pressState = 'pressing';
        this.startInterval();
    }

    onPressUp($event) {
        console.log("onPressUp", $event);
        this.pressState = 'released';
        this.stopInterval();
    }

    startInterval() {
        const self = this;
        this.interval = setInterval(function () {
            self.progress = self.progress + 1;
        }, 50);
    }

    stopInterval() {
        clearInterval(this.interval);
    }


}
