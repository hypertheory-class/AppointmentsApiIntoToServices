import { createAction, props } from '@ngrx/store';
import { AppointmentEntity } from '../reducers/appointments.reducer';

export const loadAppointments = createAction(
  '[app appointments] load appointments'
);

export const loadAppointmentsSucceeded = createAction(
  '[app appointments] load appointments succeeded',
  props<{ payload: {data: AppointmentEntity[], onCallInfo: string} }>()
);

export const loadAppointmentFailed = createAction(
  '[app appointments] load appointments failed',
  props<{ error: string }>()
);

export const appointmentAdded = createAction(
  '[app appointments] appointment added',
  props<{ payload: { name: string; nextDate: string } }>()
);

export const appointmentCreated = createAction(
  '[app appointments] appointment created',
  props<{ payload: AppointmentEntity }>()
);

export const appointmentCreatedFailed = createAction(
  '[app appointments] appointment creation failed',
  props<{ error: string }>()
);
