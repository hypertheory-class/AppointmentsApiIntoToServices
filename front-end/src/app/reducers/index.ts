import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromAppointments from './appointments.reducer';
import * as fromErrors from './errors.reducer';
export interface AppState {
  appointments: fromAppointments.AppointmentState;
  errors: fromErrors.ErrorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  appointments: fromAppointments.reducer,
  errors: fromErrors.reducer,
};

const selectAppointments =
  createFeatureSelector<fromAppointments.AppointmentState>('appointments');
const selectErrors = createFeatureSelector<fromErrors.ErrorsState>('errors');

const { selectAll: selectAllApointments } =
  fromAppointments.adapter.getSelectors(selectAppointments);

export const selectAppointmentDataLoaded = createSelector(
  selectAppointments,
  (a) => a.loaded
);

export const selectAppointmentsList = selectAllApointments;

export const selectHasError = createSelector(selectErrors, (e) => e.hasError);
export const selectErrorMessage = createSelector(
  selectErrors,
  (e) => e.errorMessage
);
