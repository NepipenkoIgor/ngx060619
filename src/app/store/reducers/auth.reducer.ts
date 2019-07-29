import { AuthActionsType, LoginSuccess, SignupSuccess } from '../actions/auth.action';

export interface IAuthState {
  isLogged: boolean;
}

const initialState: IAuthState = {
  isLogged: false
};

export function authReducer(state: IAuthState = initialState, actions: AuthActionsType): IAuthState {
  if (actions instanceof LoginSuccess) {
    return {...state, isLogged: true};
  }
  if (actions instanceof SignupSuccess) {
    return {...state, isLogged: true};
  }
  return state;
}
