import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SideSectionComponent } from './side-section.component';

@NgModule({
  declarations: [
    SideSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    SideSectionComponent
  ],
})
export class SideSectionModule { }
