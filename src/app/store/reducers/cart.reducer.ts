import { IProduct } from './products.reducer';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  AddProductToCart,
  CartProductsActions,
  DecrementProductInCart,
  IncrementProductInCart,
  RemoveProductFromCart
} from '../actions/cart.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { products } from '../../mock';
import { IStore } from '../index';


export interface ICartProduct extends IProduct {
  count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
  selectId: (product: ICartProduct) => product._id
});

const initialState: EntityState<ICartProduct> = adapter.getInitialState([{}]);


export function cartReducer(
  state: EntityState<ICartProduct> = initialState,
  action: CartProductsActions
): EntityState<ICartProduct> {
  if (action instanceof AddProductToCart) {
    const entity = state.entities[action.payload._id];
    return adapter.upsertOne(
      {
        ...action.payload,
        count: entity ? entity.count + 1 : 1
      },
      state
    );
  }
  if (action instanceof RemoveProductFromCart) {
    return adapter.removeOne(action.payload._id, state);
  }
  if (action instanceof IncrementProductInCart) {
    return adapter.updateOne({
      id: action.payload._id,
      changes: {count: action.payload.count + 1}
    }, state);
  }
  if (action instanceof DecrementProductInCart) {
    return adapter.updateOne({
      id: action.payload._id,
      changes: {count: action.payload.count - 1}
    }, state);
  }
}


export const {selectIds, selectAll} = adapter.getSelectors((state: IStore) => {
  debugger
  return state.cart
});
// export const cartProducts = createSelector(selectIds, (products) => {
//   return products;
// });


export const totalCount = createSelector(selectAll, (p: ICartProduct[]) => {
debugger
  return p.reduce((count: number, product: ICartProduct) => {
    return (count += product.count);
  }, 0);
});
