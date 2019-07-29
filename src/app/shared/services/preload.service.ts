import { PreloadAllModules, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { URL } from '../../app-routing.module';

export class PreloadService implements PreloadAllModules {

  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(route)
      .pipe(
        delay(5000),
        mergeMap((_: Route) => {
          if (_.path === URL.LOGIN) {
            return of(null);
          }
          return fn();
        })
      );
  }
}
