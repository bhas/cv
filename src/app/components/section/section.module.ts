import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SectionComponent } from './section.component';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    SectionComponent
  ],
})
export class SectionModule { }
