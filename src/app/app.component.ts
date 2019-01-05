import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  redFlag: boolean;
  myvalue: number;

  isRed(): boolean {
    return this.redFlag;
  }

  redActive(): void {
    this.redFlag = true;

    this.myvalue = Math.ceil(11 / 5);
  }

  redDisalbe(): void {
    this.redFlag = false;
  }
}
