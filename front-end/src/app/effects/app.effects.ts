import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as appActions from '../actions/app.actions';
import * as appointmentActions from '../actions/appointments.actions';

@Injectable()
export class AppEffects {
  loadAppointmentsAtAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => appointmentActions.loadAppointments())
    )
  );

  mapAppointmentErrorsToApplicationErrors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        appointmentActions.loadAppointmentFailed,
        appointmentActions.appointmentCreatedFailed
      ),
      map((a) =>
        appActions.applicationError({ from: 'Appointments', message: a.error })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
