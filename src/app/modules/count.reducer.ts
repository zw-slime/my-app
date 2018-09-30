import { Action } from "@ngrx/store";

export enum ActTypes {
  INCREMENT = "[Counter] INCREMENT",
  DECREMENT = "[Counter] DECREMENT",
  RESET = "[Counter] RESET"
}

export class ActionIncrement implements Action {
  readonly type = ActTypes.INCREMENT;
}

export class ActionDecrement implements Action {
  readonly type = ActTypes.DECREMENT;
}

export class ActionReset implements Action {
  readonly type = ActTypes.RESET;

  constructor(public payload: number) {}
}

export type Actions = ActionIncrement | ActionDecrement | ActionReset;

export class State {
  count: number;
}

export const initialState: State = {
  count: 0
};
export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case ActTypes.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case ActTypes.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case ActTypes.RESET: {
      return { ...state, count: action.payload };
    }
    default: {
      return state;
    }
  }
}
