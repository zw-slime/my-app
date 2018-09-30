import { Actions, ActTypes } from "./actions";

export interface IDataSate {
  userName: string;
  password: string;
}

export interface IStateLoading {
  loading: { [key in string]?: boolean };
}

export type State = IDataSate & IStateLoading;

export const initialState = {
  userName: "",
  password: "",
  loading: {}
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActTypes.login: {
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password
      };
    }
    default: {
      return state;
    }
  }
}
