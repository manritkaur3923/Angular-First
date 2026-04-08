import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Counter } from './components/counter/counter';
import { LiveInput } from './components/live-input/live-input';
import { ButtonDisableInput } from './components/button-disable-input/button-disable-input';
import { DynamicColorChanger } from './components/dynamic-color-changer/dynamic-color-changer';
import { TogglePassword } from './components/toggle-password/toggle-password';
import { RoleBasedUI } from './components/role-based-ui/role-based-ui';
import { SwitchCaseUI } from './components/switch-case-ui/switch-case-ui';
import { SmartInputBox } from './components/smart-input-box/smart-input-box';
import { BasicsOfLoop } from './components/basics-of-loop/basics-of-loop';
import { LoopWithObjects } from './components/loop-with-objects/loop-with-objects';
import { Signals } from './components/signals/signals';
import { AdvancedSignal } from './components/advanced-signal/advanced-signal';

@Component({
  selector: 'app-root',
  imports: [
    Home,
    Counter,
    LiveInput,
    ButtonDisableInput,
    DynamicColorChanger,
    TogglePassword,
    RoleBasedUI,
    SwitchCaseUI,
    SmartInputBox,
    BasicsOfLoop,
    LoopWithObjects,
    Signals,
    AdvancedSignal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name = 'Manrit';
  age = 22;
}
