import { Action } from '@ngrx/store';
import { GetProductsSuccess, ProductsActionTypes } from '../actions/products.action';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
}

const initialState: IProduct[] = [];

export function productsReducer(state: IProduct[] = initialState, actions: ProductsActionTypes) {
  if (actions instanceof GetProductsSuccess) {
    return actions.payload;
  }
  return state;
}
