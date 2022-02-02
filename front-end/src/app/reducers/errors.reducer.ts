import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';
export interface ErrorsState {
  hasError: boolean;
  errorMessage: string | null;
}

const initialState: ErrorsState = {
  hasError: false,
  errorMessage: null,
};

export const reducer = createReducer(
  initialState,
  on(actions.applicationError, (s, a) => ({
    ...s,
    hasError: true,
    errorMessage: `From ${a.from}: ${a.message}`,
  })),
  on(actions.clearApplicationError, () => initialState)
);
