import { Component } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  imports: [
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _userService: UserService) {}

  public login(): void {
    this._userService.login();
  }

}
