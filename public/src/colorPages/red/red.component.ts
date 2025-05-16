import {Component, effect, inject, Input, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {YellowComponent} from '../yellow/yellow.component';

@Component({
  selector: 'app-red',
  imports: [
    RouterOutlet,
    RouterLink,
    YellowComponent
  ],
  templateUrl: './red.component.html',
  styleUrl: './red.component.scss'
})
export class RedComponent {

  parentValue = signal(0);

 constructor() {
   effect(() => {
     console.log(`parentValue changed ${this.parentValue()}`)
   })
 }

}

