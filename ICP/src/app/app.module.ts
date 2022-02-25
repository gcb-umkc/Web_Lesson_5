import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'
import {TimerComponent} from "./Timer/Timer.component";
// import { timerComponent } from './Timer/timer/timer.component'

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
        // timerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
