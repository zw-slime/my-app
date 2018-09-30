import * as fromLogin from "./pages/login/ngrx/reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
export interface LoginState {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<LoginState> = {
  login: fromLogin.reducer
};

export const loginFeature = createFeatureSelector<LoginState>("login");
export const loginSelector = createSelector(
  loginFeature,
  (state: LoginState) => state.login
);
