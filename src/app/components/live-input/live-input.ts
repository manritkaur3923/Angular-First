import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-input',
  imports: [FormsModule],
  templateUrl: './live-input.html',
  styleUrl: './live-input.scss',
})
export class LiveInput {
  // word: string = '';
  // handleInput(event: Event) {
  //   this.word = (event.target as HTMLInputElement)?.value;
  //   console.log('Input', (event.target as HTMLInputElement)?.value);
  // }

  // name = signal("mani")

  name :string = ""
  getName(val : string){
    this.name = val
    console.log(val)
  }
  setName(){
    
  }
}
