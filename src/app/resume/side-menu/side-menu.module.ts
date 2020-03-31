import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    SideMenuComponent
  ],
})
export class SideMenuModule { }
