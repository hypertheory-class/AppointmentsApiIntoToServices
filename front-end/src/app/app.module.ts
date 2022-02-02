import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/appointments/list/list.component';
import { EntryComponent } from './components/appointments/entry/entry.component';
import { AppointmentEffects } from './effects/appointments.effects';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AppointmentsComponent,
    ListComponent,
    EntryComponent,
    ErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([AppEffects, AppointmentEffects]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
