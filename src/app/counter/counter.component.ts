import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="decrementBy(1)">-1</button>
    <button (click)="reset()">reset</button>
    <hr>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 25;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decrementBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 25;
  }


}
