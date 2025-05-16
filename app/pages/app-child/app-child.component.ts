import { Component, Output, Signal, computed, input, linkedSignal, model, output, signal } from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  imports: [
    JsonPipe
  ],
  styleUrl: './app-child.component.scss'
})
export class AppChildComponent {

  value = model(0);

  public increment(): void {
    this.value.update(oldValue => oldValue + 1)
  }



  public shippingAddresses = signal<string[]>(['New-York', 'London', 'Amsterdam', 'Paris']);

  // public selectedOption = signal<string>(this.shippingAddresses()[0])
  // public selectedOption = linkedSignal(() => this.shippingAddresses()[0])
  public selectedOption = linkedSignal<string[], string>({
    source: this.shippingAddresses,
    computation: (newOptions, previous) => {
      console.log(previous);
      return newOptions[0]
    },
    equal: (a, b) => a.length < b.length
  })

  public changeShippingAddress(index: number): void {
    this.selectedOption.set(this.shippingAddresses()[index])
  }

  public changeAddresses(): void {
    this.shippingAddresses.set(['Moscow', 'Novgorod', 'Samara'])
  }
}
