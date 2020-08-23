import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResumePage1Component } from './resume-page1.component';
import {SectionModule} from '../../components/section/section.module';
import {SideSectionModule} from '../../components/side-section/side-section.module';
import {ResumeLayoutModule} from '../../components/resume-layout/resume-layout.module';

@NgModule({
  declarations: [
    ResumePage1Component
  ],
  imports: [
    BrowserModule,
    SectionModule,
    SideSectionModule,
    ResumeLayoutModule
  ],
  providers: [],
  exports: [ResumePage1Component]
})
export class ResumePage1Module { }
