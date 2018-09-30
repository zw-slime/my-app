import { createSelector } from "@ngrx/store";
import { loginSelector } from "../../../login.reducer";
import { State } from "./reducer";

export const selectUserName = createSelector(
  loginSelector,
  (state: State) => state.userName
);

export const selectPassword = createSelector(
  loginSelector,
  (state: State) => state.password
);

export const selectValues = createSelector(
  selectUserName,
  selectPassword,
  (userName, password) => {
    return { userName, password };
  }
);
