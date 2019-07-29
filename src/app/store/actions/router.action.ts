import { Action } from '@ngrx/store/src/models';
import { NavigationExtras } from '@angular/router';

export enum RouterAction {
  GO = 'GO',
  BACK = 'BACK',
  FORWARD = 'FORWARD',
}

export class Go implements Action {
  public readonly type = RouterAction.GO;

  public constructor(public payload: any) {
  }
}


export class Back implements Action {
  public readonly type = RouterAction.BACK;
}

export class Forward implements Action {
  public readonly type = RouterAction.FORWARD;
}

export type RouterActionTypes = Go | Back | Forward;


export interface IRouterPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}
