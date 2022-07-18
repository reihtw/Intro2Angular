import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  myVariable: string = '';
  isDisabled: boolean = false;

  constructor() {
    setInterval(() => {
      this.myVariable = Math.random().toString();
      this.isDisabled = Math.random() > 0.5;
    }, 500);
  }
}
