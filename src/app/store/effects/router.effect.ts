import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Go, IRouterPayload, RouterAction } from '../actions/router.action';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterEffects {

  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType(RouterAction.GO),
    map((action: Go) => action.payload),
    tap(({path, query: queryParams, extras}: IRouterPayload) => {
      this.router.navigate(path, {queryParams, ...extras});
    })
  );

  @Effect({dispatch: false})
  navigateBack$ = this.actions$.pipe(
    ofType(RouterAction.BACK),
    tap(() => {
      this.location.back();
    })
  );

  @Effect({dispatch: false})
  navigateForward$ = this.actions$.pipe(
    ofType(RouterAction.FORWARD),
    tap(() => {
      this.location.forward();
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {
  }
}
