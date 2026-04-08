import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-advanced-signal',
  imports: [],
  templateUrl: './advanced-signal.html',
  styleUrl: './advanced-signal.scss',
})
export class AdvancedSignal {
  todos = signal([
    { task: 'Learn React', done: true },
    { task: 'Learn Vue', done: false },
    { task: 'Learn Angular', done: true },
  ]);

  totalTasks = computed(() => this.todos().length);
  completedTasks = computed(() => this.todos().filter((todo) => todo.done).length);

  toggleTask(i: number) {
    const updatedTodos = [...this.todos()];
    updatedTodos[i].done = !updatedTodos[i].done;
    this.todos.set(updatedTodos);
  }

  // disable button
  username = signal('');
  password = signal('');
  isFormValid = computed(() => {
    if (this.username() && this.password()) {
      return true;
    } else return false;
  });
}
