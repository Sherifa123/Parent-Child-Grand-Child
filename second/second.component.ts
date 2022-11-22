import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //dependancy injection
  a = 50;
  b = 30;
  result = SharedService.calculate(this.a, this.b);
  changeResult() {
    console.log('First Value In Second', SharedService.myFirstValue);
  }
}
