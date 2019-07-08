import { Observable, of } from 'rxjs';
import { IProduct } from '../../mock';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


export class ProductsService {

  public constructor(
    private http: HttpClient,
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
