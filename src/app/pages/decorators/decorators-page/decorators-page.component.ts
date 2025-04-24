import {AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {ChildDecoratorComponent} from '../child-decorator/child-decorator.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-decorators-page',
  imports: [
    NgTemplateOutlet,
    ChildDecoratorComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './decorators-page.component.html',
  styleUrl: './decorators-page.component.scss'
})
export class DecoratorsComponent implements AfterViewInit {
  public arr= [1, 2, 3 ,4 ,5];

  public isShow = true;

  @ViewChild('paragraph') paragraph?:ElementRef<HTMLParagraphElement>; // Можно прописать несколько селекторов  @ViewChild('paragraph , sd') paragraph?:ElementRef<HTMLParagraphElement>; - он булет искать первое совпадение по этим двум селекторам
// так же можно указать свой-ва статик - тру - можем получать доступ к данному элементу до ngAfterViewInit, не рекомедуется это использовать, только если нужно обойти логику
// read: HTMLParagraphElement - дополнительный этап фильтрации, т.е. можем указать селектор или название компонента, чтобы повторно отфильтровать то, что нам нужно будет найти
  @ViewChild('paragraphTemplate') paragraphTemplate?:TemplateRef<HTMLParagraphElement>; //обязательно надо указать джинерик, то есть какой тип будет этот элемент. Здесь обяазетльно надо указать джинерик, т.к. ангулярне может знать что у нас находится в нджи-темплейте
  // @ViewChild('component') childComponent?:ChildDecoratorComponent;
  @ViewChild(ChildDecoratorComponent) childComponent?:ChildDecoratorComponent; // такая запись работает только с одним чайлдкомпонентом.Если их будет несколько , то выводиться будет первый

  @ViewChildren(ChildDecoratorComponent) childComponents?:QueryList<ChildDecoratorComponent>;// QueryList - это не просто массив, это обертка над массивом.

  public ngAfterViewInit() {
    // console.log(this.paragraph);
    // console.log(this.paragraphTemplate);
    // console.log(this.childComponent);
    //
    console.log(this.childComponents);
    // console.log(this.paragraph?.nativeElement.textContent); //не использовать текстКонтент для изменения данных, лучше использовать только для чтения

  }

}
