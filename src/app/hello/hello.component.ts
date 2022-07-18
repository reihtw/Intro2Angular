import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myname: string = 'Reihtw';
  bitwiseOR: number = 2 | 5;
  i = 0;

  constructor() { }

  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`)
  }

  ngOnInit(): void {
  }

}
