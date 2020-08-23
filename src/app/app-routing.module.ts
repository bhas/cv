import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumePage1Component} from './views/resume-page1/resume-page1.component';
import {TestComponent} from './demos/test/test.component'; // CLI imports router

const routes: Routes = [
  { path: 'resume', component: ResumePage1Component },
  { path: 'demos/test', component: TestComponent },
  { path: '**', component: ResumePage1Component}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
