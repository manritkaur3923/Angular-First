import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-based-ui',
  imports: [FormsModule],
  templateUrl: './role-based-ui.html',
  styleUrl: './role-based-ui.scss',
})
export class RoleBasedUI {
  role :string = 'GUEST'
}
