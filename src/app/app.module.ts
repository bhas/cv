import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResumePage1Module} from './resume-page1/resume-page1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResumePage1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
