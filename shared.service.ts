import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  //dependancy injection
  static myFirstValue: any = 0;
  static calculate(a: number, b: number) {
    return a + b;
  }
  constructor() {}
  firstValue = 0;
  calculate(a: number, b: number) {
    return a + b;
  }
}
