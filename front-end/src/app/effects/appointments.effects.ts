import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as actions from '../actions/appointments.actions';
import { AppointmentEntity } from '../reducers/appointments.reducer';
@Injectable()
export class AppointmentEffects {
  private readonly baseUrl = environment.apiUrl + 'v1/scheduling/appointments';

  saveAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.appointmentAdded),
      mergeMap((a) =>
        this.client.post<AppointmentEntity>(this.baseUrl, a.payload).pipe(
          map((payload) => actions.appointmentCreated({ payload })),
          catchError((e) =>
            of(actions.loadAppointmentFailed({ error: e.message }))
          )
        )
      )
    )
  );

  loadTheData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.loadAppointments),
        mergeMap(() =>
          this.client.get<{ data: AppointmentEntity[], onCallInfo: string }>(this.baseUrl).pipe(

            map((response) => actions.loadAppointmentsSucceeded({payload:{ data: response.data, onCallInfo: response.onCallInfo} })),
            catchError((r) => {
              console.log(r);
              return of(
                actions.loadAppointmentFailed({
                  error: r.message,
                })
              );
            })
          )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) {}
}
