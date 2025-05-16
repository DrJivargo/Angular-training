import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

export interface TodoItemI{
  text: string
}

@Component({
  selector: 'app-todo-item',
  imports: [
    AsyncPipe
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input('todo') todoItem!: TodoItemI;

  public subject$: Observable<string>

  constructor(private _userService: UserService) {
    this.subject$ = this._userService.StringSubject$;
  }

  public returnBool(): boolean {
    console.log('componentRendered');
    return true;
  }

  public changeInsideText(): void{
    this.todoItem.text= 'changed from inside'
  }
}
