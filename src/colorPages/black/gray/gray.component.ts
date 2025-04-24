import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgClass} from '@angular/common';

export interface GrayOptions {//то есть мы передаем объект опций, с помощью который мы будем настраивать наш компонент
  rates: number;
  text?: string;
}
@Component({
  selector: 'app-gray',
  imports: [
    NgClass
  ],
  templateUrl: './gray.component.html',
  styleUrl: './gray.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true, // означает, что каждый компонент будет работать как независимый
      useExisting: GrayComponent
    }
  ]
})
export class GrayComponent implements ControlValueAccessor, OnInit {
  @Input() options!: GrayOptions;

  public ratesArr: number[]= []; // нужен для того, чтобы отобразить наши оценки с помощью массива

  public currentRate!: number;

  public disabled = false; // то есть мы любой контрол можем динамически дизейблить, но здесь ничего не будет дизеблиться

  public touched = false;

  onChange = (currentRate: number) => {}

  onTouched = () => {}

  ngOnInit(): void{
    this.fillRatesArr();
  }
  public onRate(index:number) {
    this.markAsTouched(); //вручную вызываем , потому что у нас нетипичный контрол, это не инпут, чекбокс и тд
    if(!this.disabled){ //если не задизеблин, то изменяем наши значения
      this.currentRate = index;
      this.onChange(this.currentRate);
    }
  }

//ControlValueAccessor methods start //дальше пишем методы, с которыми мы напрямую не взаимодействуем в темплейте, они исключительно для имплеминатции нашего класса
  public writeValue(rate: number): void {
    this.currentRate = rate;
  }

  public registerOnChange(fn: any): void {
    this.onChange= fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public markAsTouched() {
    if(!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  //ControlValueAccessor methods end
  private fillRatesArr(): void {
    let cond= true;
    let count =1;
    while(cond){
      this.ratesArr.push(count);
      if( count ==  this.options.rates ) {
        cond = false;
      } else {
        count++;
      }
    }
  }

}

