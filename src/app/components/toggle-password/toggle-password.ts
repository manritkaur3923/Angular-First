import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-password',
  imports: [FormsModule],
  templateUrl: './toggle-password.html',
  styleUrl: './toggle-password.scss',
})
export class TogglePassword {
  showPassword: boolean = false;
  togglePassword(){
    this.showPassword= !this.showPassword
  }
}
