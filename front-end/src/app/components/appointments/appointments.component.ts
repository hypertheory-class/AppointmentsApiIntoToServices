import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAppointmentDataLoaded,
  selectAppointmentsList,
} from 'src/app/reducers';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  loaded$ = this.store.select(selectAppointmentDataLoaded);
  data$ = this.store.select(selectAppointmentsList);
  addEnabled = environment.features.canAddAppointments;
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
