import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public tapCount: number = 0;
    public pressCount: number = 0;
    public pressState: string = "released";

    tapButton() {
        this.tapCount = this.tapCount + 1;
    }

    onPress($event) {
        console.log("On Press", $event);
        this.pressState = 'pressing';
    }

     onPressUp($event) {
        console.log("On Pressup", $event);
         this.pressState = 'released';
     }

}
