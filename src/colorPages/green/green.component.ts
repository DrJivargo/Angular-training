import {Component, inject, Input} from '@angular/core';
import {ProfileService} from '../../app/services/profile.service';
import {Profile} from '../../app/interfaces/profile.interface';
import {UsersComponent} from './users/users.component';

@Component({
  selector: 'app-green',
  imports: [
    UsersComponent
  ],
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss'
})
export class GreenComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];


  constructor() {
    this.profileService.getProfile().subscribe(val => {
      this.profiles = val
    })
  }


}
