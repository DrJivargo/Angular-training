import {ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {ViewBarComponent} from '../view-bar/view-bar.component';
import {UserService} from '../../../services/user.service';
import {TodoItemComponent, TodoItemI} from '../../../component/todo-item/todo-item.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


const fadeInOut = trigger('fadeInOut', [
  state('in', style({opacity: 1})),
  state('out', style({opacity: 0})),
  transition('in <=> out', [animate('1s ease-in-out')])
  //opacity не дает сьхать кнопке, потому что у нас есть контейнер прозрачный , который находится на одном и том же месте постоянно
])

@Component({
  selector: 'app-view-foo',
  imports: [
    ViewBarComponent,
    TodoItemComponent,
  ],
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 {color: green}'
  ],
 animations: [fadeInOut]
})

export class ViewFooComponent {

  public isShow = false;

  constructor(private _userService: UserService, private _cdr: ChangeDetectorRef) {
  }

    public todoArr: TodoItemI[]=[
      {
        text:'Foo1' //рендерим 3 раза, т.к. 3 элемента массива
      },
      {
        text:'Foo2'
      },
      {
        text:'Foo3'
      }
    ]

  public login():void{
    this._userService.login();
    this._cdr.detectChanges(); // через эту функцию мы можем задать ререндер нашего дерева. ЛУчше так не делать.
  }

  public changeText(): void {
      this.todoArr[0] = {...this.todoArr[0], text :'Foo Changed'};
  }

  public changeStream(): void {
      this._userService.StringSubject$.next('two');
  }

  // public onAnimationStart (event: any){
  //   console.log('start', event);
  // }
  // public onAnimationDone (event: any){
  //   console.log('done', event);
  // }

  protected readonly transition = transition;
}



