import { Component, Input, OnInit } from '@angular/core';
import { AppointmentEntity } from 'src/app/reducers/appointments.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() appointments: AppointmentEntity[] = [];

  constructor() {}

  ngOnInit(): void {}
}
