import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AuthAction, LoginPending, LoginSuccess, SignupPending, SignupSuccess } from '../actions/auth.action';
import { IUser } from '../reducers/user.reducer';
import { SetUser } from '../actions/user.action';
import { Go } from '../actions/router.action';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthAction.LOGIN_PENDING),
    map((action: LoginPending) => action.payload),
    switchMap((user: any) => this.authService.login(user)
      .pipe(
        switchMap((u: IUser) => this.authService.tokenToLocalStorage(u)),
        mergeMap((u: IUser) => {
          return [
            new LoginSuccess(u),
            new SetUser(u),
            new Go({path: ['backoffice']})
          ];
        }),
        catchError(() => EMPTY)
      ))
  );

  @Effect()
  signup$ = this.actions$.pipe(
    ofType(AuthAction.SIGNUP_SUCCESS),
    map((action: SignupPending) => action.payload),
    switchMap((user: any) => this.authService.signup(user)
      .pipe(
        switchMap((u: IUser) => this.authService.tokenToLocalStorage(u)),
        mergeMap((u: IUser) => {
          return [
            new SignupSuccess(u),
            new SetUser(u),
            new Go({path: ['backoffice']})
          ];
        }),
        catchError(() => EMPTY)
      ))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthAction.LOGOUT_PENDING),
    switchMap(() => this.authService.removeFromLocalStorage('accessToken')
      .pipe(
        map((u: IUser) => {
          return new Go({path: ['login']});
        }),
        catchError(() => EMPTY)
      ))
  );

  @Effect()
  init$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this.authService.checkUser()
      .pipe(
        mergeMap((u: IUser) => {
          return [
            new LoginSuccess(u),
            new SetUser(u),
            new Go({path: ['backoffice']})
          ];
        }),
        catchError(() => EMPTY)
      ))
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
