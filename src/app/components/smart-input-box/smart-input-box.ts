import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-input-box',
  imports: [FormsModule],
  templateUrl: './smart-input-box.html',
  styleUrl: './smart-input-box.scss',
})
export class SmartInputBox {
  value: string = '';
  clearInput(input: HTMLInputElement) {
    input.value = '';
    this.value = '';
  }
}
