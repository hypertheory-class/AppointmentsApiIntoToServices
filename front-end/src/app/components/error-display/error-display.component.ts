import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearApplicationError } from 'src/app/actions/app.actions';
import { selectErrorMessage, selectHasError } from 'src/app/reducers';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css'],
})
export class ErrorDisplayComponent implements OnInit {
  hasError$ = this.store.select(selectHasError);
  error$ = this.store.select(selectErrorMessage);

  constructor(private store: Store) {}

  clear() {
    this.store.dispatch(clearApplicationError());
  }

  ngOnInit(): void {}
}
