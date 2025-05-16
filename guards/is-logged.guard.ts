import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class isLoggedGuardService implements CanActivate {

  constructor(private _userService: UserService) { //здесь мы инжектим наш сервис, это способ инжекта в класс
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // return false; - зафарбидить - запретить рут // observable -рут сам возвращает подписку и отписку в виде булен
  return this._userService.isUserLogged.pipe(
    map((isLogged)=> {
      if (isLogged) {
        return true;
      } else {
        return false;
      }
    })
  )
  }

}
//если же необходимо инжектить в функцию, то используется метод (inject)
export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLogged;
};
