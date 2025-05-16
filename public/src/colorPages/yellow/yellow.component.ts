import {Component, computed, input, model, output} from '@angular/core';
import {filter, from, map} from 'rxjs';

@Component({
  selector: 'app-yellow',
  imports: [],
  templateUrl: './yellow.component.html',
  styleUrl: './yellow.component.scss'
})
export class YellowComponent {

  value = model(0);

  public increment(): void {
    this.value.update(oldValue => oldValue + 1);
  }

  // constructor() {
  //   const array :number[]= [1,2,3,4,5]
  //
  //   const newArray = array
  //     .map(val => {
  //       console.log('map',val)
  //     return val*2
  //   }).filter(val => {
  //     console.log('filter',val)
  //       return val>6
  //     })
  //
  //   console.log(newArray)
  //
  //   from([1,2,3,4,5])
  //     .pipe(
  //     map(val => {
  //       console.log('map',val)
  //       return val*2}),
  //       filter(val => {
  //         console.log('filter',val)
  //         return val>6})
  //     ).subscribe(val => {
  //       console.log('result',val)
  //   })
  // }
}



function multiplyByFour(value:number){
  return value*4
}
