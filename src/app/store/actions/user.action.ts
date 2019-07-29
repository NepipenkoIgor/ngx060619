import { Action } from '@ngrx/store';
import { IUser } from '../reducers/user.reducer';

export enum UserAction {
  SET_USER = 'SET_USER'
}

export class SetUser implements Action {
  public readonly type = UserAction.SET_USER;

  public constructor(
    public readonly payload: IUser
  ) {
  }
}

export type UserActionTypes = SetUser;
