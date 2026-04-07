import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Counter } from './components/counter/counter';
import { LiveInput } from './components/live-input/live-input';
import { ButtonDisableInput } from './components/button-disable-input/button-disable-input';

@Component({
  selector: 'app-root',
  imports: [Home, Counter, LiveInput, ButtonDisableInput],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name = 'Manrit';
  age = 22;

}
