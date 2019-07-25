import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../../store/reducers/products.reducer';
import { Inject } from '@angular/core';



export class ProductsService {

  public constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
  }
}
