import { createAction, props } from '@ngrx/store';

export const applicationStarted = createAction('[APP] APPLICATION_STARTED');

export const applicationError = createAction(
  '[app] application error',
  props<{ from: string; message: string }>()
);

export const clearApplicationError = createAction(
  '[app] clear application error'
);
