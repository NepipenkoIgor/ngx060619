import { IProduct, productsReducer } from './reducers/products.reducer';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { EntityState } from '@ngrx/entity';

export interface IStore {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer
};
