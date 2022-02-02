import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appointmentAdded } from 'src/app/actions/appointments.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    nextDate: ['', [Validators.required]],
  });
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  get name() {
    return this.form.get('name');
  }
  get nextDate() {
    return this.form.get('nextDate');
  }

  ngOnInit(): void {}

  submit(control: HTMLInputElement) {
    if (!this.form.valid) {
      // trigger validation...
    } else {
      this.store.dispatch(appointmentAdded({ payload: this.form.value }));
      this.form.reset();
      control.focus();
    }
  }
}
