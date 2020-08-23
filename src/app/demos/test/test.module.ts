import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [TestComponent]
})
export class TestModule { }
