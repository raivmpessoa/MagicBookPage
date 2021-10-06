import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book1Component } from './books/book1/book1.component';
import { Book2Component } from './books/book2/book2.component';
import { Book3Component } from './books/book3/book3.component';
import { Book4Component } from './books/book4/book4.component';
import { Book5Component } from './books/book5/book5.component';
import { Book6Component } from './books/book6/book6.component';
import { Book7Component } from './books/book7/book7.component';
import { Book8Component } from './books/book8/book8.component';
import { Book9Component } from './books/book9/book9.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'book1', component:Book1Component},
  {path:'book2', component:Book2Component},
  {path:'book3', component:Book3Component},
  {path:'book4', component:Book4Component},
  {path:'book5', component:Book5Component},
  {path:'book6', component:Book6Component},
  {path:'book7', component:Book7Component},
  {path:'book8', component:Book8Component},
  {path:'book9', component:Book9Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
