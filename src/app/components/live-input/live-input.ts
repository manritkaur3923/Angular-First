// import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './live-input.html',
  styleUrl: './live-input.scss',
})
// export class LiveInput {
//   // word: string = '';
//   // handleInput(event: Event) {
//   //   this.word = (event.target as HTMLInputElement)?.value;
//   //   console.log('Input', (event.target as HTMLInputElement)?.value);
//   // }

//   // name = signal("mani")

//   name :string = ""
//   getName(val : string){
//     this.name = val
//     console.log(val)
//   }
//   setName(){
//     this.name = "Mary"
//   }
// }
export class LiveInput {
  name: string = '';
  getName(input: HTMLInputElement) {
    this.name = input.value;
    console.log(this.name);

    input.value = '';
  }
  setName() {
    this.name = 'Mary';
  }
}
