import { SetUser, UserActionTypes } from '../actions/user.action';

export interface IUser {
  createdAt: Date;
  _id: string;
  username: string;
  accessToken: string;
}

const initialState: IUser = {
  createdAt: new Date(),
  _id: '',
  username: '',
  accessToken: ''
};

export function userReducer(state: IUser = initialState, actions: UserActionTypes) {
  if (actions instanceof SetUser) {
    return actions.payload;
  }
  return state;
}
