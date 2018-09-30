import { Action } from "@ngrx/store";

export enum ActTypes {
  login = "[login] login"
}

export interface ILoginReq {
  userName: string;
  password: string;
}

export class ActionLogin implements Action {
  readonly type = ActTypes.login;

  constructor(public payload: ILoginReq) {}
}

export type Actions = ActionLogin;
