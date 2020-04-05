import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResumeComponent } from './resume.component';
import {SideMenuModule} from './side-menu/side-menu.module';
import {SectionModule} from '../components/section/section.module';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    SideMenuModule,
    SectionModule
  ],
  providers: [],
  exports: [ResumeComponent]
})
export class ResumeModule { }
