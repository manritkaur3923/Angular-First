import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  // Counter with Signals
  count = signal(0);

  // Input with Signal
  name = signal('');
  updateName(input: HTMLInputElement) {
    this.name.set(input.value);
  }

  // fullname generator
  firstname = signal('');
  lastname = signal('');
  fullname = computed(() => this.firstname() + ' ' + this.lastname());

  // Character Counter
  value = signal('');
  checkLength(input: HTMLInputElement) {
    this.value.set(input.value);
  }

  // Cart Total Price
  cart = signal([
    { name: 'Item1', price: 200, qty: 1 },
    { name: 'Item2', price: 500, qty: 3 },
  ]);
  totalPrice = computed(() =>
    this.cart().reduce((total, item) => total + item.price * item.qty, 0),
  );
  decQty(id: number) {
    const updatedCart = [...this.cart()];
    updatedCart[id].qty--;
    this.cart.set(updatedCart);
  }
  incQty(id: number) {
    const updatedCart = [...this.cart()];
    updatedCart[id].qty++;
    this.cart.set(updatedCart);
  }

  // Toggle Theme
  isDark = signal(false);
  toggleTheme() {
    this.isDark.set(!this.isDark());
  }
  themeStyles = computed(() => ({
    backgroundColor: this.isDark() ? '#121212' : 'white',
    color: this.isDark() ? 'white' : 'black',
  }));

  // Filter list
  search = signal('');
  items = signal(['Apple', 'Banana', 'Mango', 'Orange']);

  filteredItems = computed(() => {
    const query = this.search().toLowerCase();
    return this.items().filter((i) => i.toLowerCase().includes(query));
  });

}
