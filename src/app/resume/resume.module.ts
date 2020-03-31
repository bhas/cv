import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResumeComponent } from './resume.component';
import {SideMenuModule} from './side-menu/side-menu.module';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    SideMenuModule
  ],
  providers: [],
  exports: [ResumeComponent]
})
export class ResumeModule { }
