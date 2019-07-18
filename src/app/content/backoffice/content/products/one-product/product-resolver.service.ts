import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../../../../../mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProduct | null> {

  public constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    return this.http.get(`/products/${route.paramMap.get('id')}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
            return product;
          }
          return product;
        }),
        catchError((_err) => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  };
}
