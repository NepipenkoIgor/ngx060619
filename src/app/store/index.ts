import { IProduct, productsReducer } from './reducers/products.reducer';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { EntityState } from '@ngrx/entity';
import { IUser, userReducer } from './reducers/user.reducer';
import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { authReducer, IAuthState } from './reducers/auth.reducer';
import { ActionReducer } from '@ngrx/store';
import { AuthActionsType, LogoutPending } from './actions/auth.action';

export interface IStore {
  products: IProduct[];
  cart: EntityState<ICartProduct>;
  user: IUser;
  auth: IAuthState;
  router: fromRouter.RouterReducerState<IRouterState>;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  auth: authReducer,
  router: fromRouter.routerReducer
};


export interface IRouterState {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer implements fromRouter.RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    const {url, root: {queryParams}} = routerState;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {
      params
    } = state;
    return {url, params, queryParams};
  }
}

export function logoutAcdClearState(reducer: ActionReducer<IStore>): ActionReducer<IStore> {
  return (state: IStore | undefined, action: AuthActionsType): IStore => {
    if (action instanceof LogoutPending) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
