import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { URL } from './app-routing.module';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url = state.url;
    return of(true)
      .pipe(
        switchMap((isLogged) => {
          if (!isLogged && (url === `/${URL.LOGIN}` || url === `/${URL.SIGNUP}`)) {
            return of(true);
          }
          if (isLogged && (url === `/${URL.LOGIN}` || url === `/${URL.SIGNUP}`)) {
            this.router.navigate([`/${URL.OFFICE}`]);
            return of(false);
          }
          if (!isLogged) {
            this.router.navigate([`/${URL.LOGIN}`]);
          }
          return of(isLogged);
        })
      );
  }
}
