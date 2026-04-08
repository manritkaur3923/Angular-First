import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-with-objects',
  imports: [],
  templateUrl: './loop-with-objects.html',
  styleUrl: './loop-with-objects.scss',
})
export class LoopWithObjects {
  products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Phone', price: 20000 },
  ];

  fruit: string = '';
  fruits = ['Apple', 'Banana', 'Mango'];
  handleAdd(input: HTMLInputElement) {
    this.fruits.push(input.value);

    input.value = '';
  }

  handleDelete(index: number) {
    this.fruits.splice(index, 1);
  }
}
