import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // basic approach
  // a = 50;
  // b = 20;
  // result = 0;
  // calculate(a: any, b: any) {
  //   this.result = a + b;
  // }
  a = 50;
  b = 20;
  // sharedResult = new ServiceService();
  // result = this.sharedResult.calculate(this.a, this.b);

  // //changing the value of result from service
  // changeResult() {
  //   this.sharedResult.firstValue = this.result;
  //   console.log('First Value Reassigned as:', this.sharedResult.firstValue);
  // }
  // //dependency injection
  result = SharedService.calculate(this.a, this.b);

  //changing value from service
  changeResult() {
    console.log('First Value Is:', SharedService.myFirstValue);
    SharedService.myFirstValue = this.result;
    console.log('First Value Reassigned As:', SharedService.myFirstValue);
  }
}
