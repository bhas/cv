import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResumeLayoutComponent } from './resume-layout.component';
import {SideMenuContentDirective} from './directives/sideMenuContentDirective';
import {TitleContentDirective} from './directives/titleContentDirective';

@NgModule({
  declarations: [
    ResumeLayoutComponent,
    SideMenuContentDirective,
    TitleContentDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    ResumeLayoutComponent,
    SideMenuContentDirective,
    TitleContentDirective
  ]
})
export class ResumeLayoutModule { }
