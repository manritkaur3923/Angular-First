import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-color-changer',
  imports: [FormsModule],
  templateUrl: './dynamic-color-changer.html',
  styleUrl: './dynamic-color-changer.scss',
})
export class DynamicColorChanger {
  isRed: boolean = true;
  toggle() {
    this.isRed = !this.isRed;
  }

  password: string = '';

  view: boolean = true;
  handleVisibility(){
    this.view = !this.view
  }
}
