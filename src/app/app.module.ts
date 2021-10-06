import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Book1Component } from './books/book1/book1.component';
import { Book2Component } from './books/book2/book2.component';
import { Book3Component } from './books/book3/book3.component';
import { Book4Component } from './books/book4/book4.component';
import { Book5Component } from './books/book5/book5.component';
import { Book6Component } from './books/book6/book6.component';
import { Book7Component } from './books/book7/book7.component';
import { Book8Component } from './books/book8/book8.component';
import { Book9Component } from './books/book9/book9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Book1Component,
    Book2Component,
    Book3Component,
    Book4Component,
    Book5Component,
    Book6Component,
    Book7Component,
    Book8Component,
    Book9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
