import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-disable-input',
  imports: [FormsModule],
  templateUrl: './button-disable-input.html',
  styleUrl: './button-disable-input.scss',
})
export class ButtonDisableInput {
  name = signal("Manrit")
}
