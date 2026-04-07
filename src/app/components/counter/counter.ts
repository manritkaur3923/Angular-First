import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count = 0;

  handleCounter(val: string) {
    if (val === 'minus') {
      if ((this.count === 0)) {
        this.count = 0;
      } else {
        this.count -= 1;
      }
    } else if (val === 'plus') {
      this.count += 1;
    } else {
      this.count = 0;
    }
  }
}
