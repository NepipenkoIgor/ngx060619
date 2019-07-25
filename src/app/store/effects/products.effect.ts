import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GET_PRODUCTS_PENDING, GetProductsSuccess } from '../actions/products.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IProduct } from '../reducers/products.reducer';
import { EMPTY } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';

@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(GET_PRODUCTS_PENDING),
    switchMap(() => this.productsService.getProducts()
      .pipe(
        map((products: IProduct[]) => new GetProductsSuccess(products)),
        catchError(() => EMPTY)
      ))
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }
}
