import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./router-ngrx";

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.warn(state + ":" + action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
