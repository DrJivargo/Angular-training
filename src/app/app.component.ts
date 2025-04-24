import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pages';

  private userService = inject(UserService);

  // constructor(private userService: UserService) { //здесь мы объявили наш сервис с компонентом
  //   this.userService //после чего можем использовать его в самом конструкторе
  // }

  public someMethod(): void { // или же в других методах этого компонента
    this.userService
  }
}
