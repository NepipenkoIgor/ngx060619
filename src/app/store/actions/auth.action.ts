import { Action } from '@ngrx/store';
import { IUser } from '../reducers/user.reducer';

export enum AuthAction {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  SIGNUP_PENDING = 'SIGNUP_PENDING',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAIL = 'SIGNUP_FAIL',
  LOGOUT_PENDING = 'LOGOUT_PENDING',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
}

export class LoginPending implements Action {
  public readonly type = AuthAction.LOGIN_PENDING;

  public constructor(
    public readonly payload: any
  ) {
  }
}

export class LoginSuccess implements Action {
  public readonly type = AuthAction.LOGIN_SUCCESS;

  public constructor(
    public readonly payload: IUser
  ) {
  }
}

export class LoginFail implements Action {
  public readonly type = AuthAction.LOGIN_FAIL;

  public constructor(
    public readonly payload: any
  ) {
  }
}

export class SignupPending implements Action {
  public readonly type = AuthAction.SIGNUP_PENDING;

  public constructor(
    public readonly payload: any
  ) {
  }
}

export class SignupSuccess implements Action {
  public readonly type = AuthAction.SIGNUP_SUCCESS;

  public constructor(
    public readonly payload: IUser
  ) {
  }
}

export class SignupFail implements Action {
  public readonly type = AuthAction.SIGNUP_FAIL;

  public constructor(
    public readonly payload: any
  ) {
  }
}


export class LogoutPending implements Action {
  public readonly type = AuthAction.LOGOUT_PENDING;
}

export class LogoutSuccess implements Action {
  public readonly type = AuthAction.LOGOUT_SUCCESS;
}

export class LogoutFail implements Action {
  public readonly type = AuthAction.LOGOUT_FAIL;
}

export type AuthActionsType =
  | LoginPending
  | LoginSuccess
  | LoginFail
  | SignupPending
  | SignupSuccess
  | SignupFail
  | LogoutPending
  | LogoutSuccess
  | LogoutFail
