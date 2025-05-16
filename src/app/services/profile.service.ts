import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  profileApiUrl = 'https://icherniakov.ru/yt-course/'

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.profileApiUrl}account/test_accounts`);
  }
}
