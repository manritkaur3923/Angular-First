import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-case-ui',
  imports: [FormsModule],
  templateUrl: './switch-case-ui.html',
  styleUrl: './switch-case-ui.scss',
})
export class SwitchCaseUI {
  dayNum: number = 1;
}
