import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent, },
  {
    path: 'callback',
    component: Home2Component,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
