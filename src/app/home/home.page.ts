import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tapCount: number = 0;

  tapButton(){
      this.tapCount = this.tapCount + 1;
  }

}
