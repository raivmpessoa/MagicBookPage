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
import { Pergunta1Component } from './perguntas/pergunta1/pergunta1.component';
import { Pergunta2Component } from './perguntas/pergunta2/pergunta2.component';
import { Pergunta3Component } from './perguntas/pergunta3/pergunta3.component';
import { Pergunta4Component } from './perguntas/pergunta4/pergunta4.component';
import { Pergunta5Component } from './perguntas/pergunta5/pergunta5.component';
import { Acerto1Component } from './acerto/acerto1/acerto1.component';
import { Acerto2Component } from './acerto/acerto2/acerto2.component';
import { Acerto3Component } from './acerto/acerto3/acerto3.component';
import { Acerto4Component } from './acerto/acerto4/acerto4.component';
import { Acerto5Component } from './acerto/acerto5/acerto5.component';
import { Erro1Component } from './erro/erro1/erro1.component';
import { Erro2Component } from './erro/erro2/erro2.component';
import { Erro3Component } from './erro/erro3/erro3.component';
import { PerguntasComponent } from './perguntas/perguntas/perguntas.component';
import { Erro4Component } from './erro/erro4/erro4.component';
import { Erro5Component } from './erro/erro5/erro5.component';

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
    Book9Component,
    Pergunta1Component,
    Pergunta2Component,
    Pergunta3Component,
    Pergunta4Component,
    Pergunta5Component,
    Acerto1Component,
    Acerto2Component,
    Acerto3Component,
    Acerto4Component,
    Acerto5Component,
    Erro1Component,
    Erro2Component,
    Erro3Component,
    PerguntasComponent,
    Erro4Component,
    Erro5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
