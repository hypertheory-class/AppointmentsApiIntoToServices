import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/appointments.actions';
export interface AppointmentEntity {
  id: string;
  name: string;
  nextDate: string;
}

export interface AppointmentState extends EntityState<AppointmentEntity> {
  loaded: boolean;
  onCallInfo?: string;
}

export const adapter = createEntityAdapter<AppointmentEntity>();

const initialState = adapter.getInitialState({ loaded: false });

export const reducer = createReducer(
  initialState,
  on(actions.loadAppointmentsSucceeded, (s, a) => {
    const newState = adapter.setAll(a.payload.data, s);
    return { ...newState, loaded: true, onCallInfo: a.payload.onCallInfo };
  }),
  on(
    actions.loadAppointmentFailed,
    actions.loadAppointments,
    () => initialState
  ),
  on(actions.appointmentCreated, (s, a) => adapter.addOne(a.payload, s))
);
