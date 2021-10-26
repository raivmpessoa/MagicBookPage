import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acerto1Component } from './acerto/acerto1/acerto1.component';
import { Acerto2Component } from './acerto/acerto2/acerto2.component';
import { Acerto3Component } from './acerto/acerto3/acerto3.component';
import { Acerto4Component } from './acerto/acerto4/acerto4.component';
import { Acerto5Component } from './acerto/acerto5/acerto5.component';
import { Book1Component } from './books/book1/book1.component';
import { Book2Component } from './books/book2/book2.component';
import { Book3Component } from './books/book3/book3.component';
import { Book4Component } from './books/book4/book4.component';
import { Book5Component } from './books/book5/book5.component';
import { Book6Component } from './books/book6/book6.component';
import { Book7Component } from './books/book7/book7.component';
import { Book8Component } from './books/book8/book8.component';
import { Book9Component } from './books/book9/book9.component';
import { Erro1Component } from './erro/erro1/erro1.component';
import { Erro2Component } from './erro/erro2/erro2.component';
import { Erro3Component } from './erro/erro3/erro3.component';
import { Erro4Component } from './erro/erro4/erro4.component';
import { Erro5Component } from './erro/erro5/erro5.component';
import { HomeComponent } from './home/home.component';
import { Pergunta1Component } from './perguntas/pergunta1/pergunta1.component';
import { Pergunta2Component } from './perguntas/pergunta2/pergunta2.component';
import { Pergunta3Component } from './perguntas/pergunta3/pergunta3.component';
import { Pergunta4Component } from './perguntas/pergunta4/pergunta4.component';
import { Pergunta5Component } from './perguntas/pergunta5/pergunta5.component';
import { PerguntasComponent } from './perguntas/perguntas/perguntas.component';

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
  {path:'book9', component:Book9Component},
  {path:'perguntas', component:PerguntasComponent},
  {path:'pergunta1', component:Pergunta1Component},
  {path:'pergunta2', component:Pergunta2Component},
  {path:'pergunta3', component:Pergunta3Component},
  {path:'pergunta4', component:Pergunta4Component},
  {path:'pergunta5', component:Pergunta5Component},
  {path:'acerto1', component:Acerto1Component},
  {path:'erro1', component:Erro1Component},
  {path:'acerto2', component:Acerto2Component},
  {path:'erro2', component:Erro2Component},
  {path:'erro3', component:Erro3Component},
  {path:'acerto3', component:Acerto3Component},
  {path:'acerto4', component:Acerto4Component},
  {path:'erro4', component:Erro4Component},
  {path:'erro5', component:Erro5Component},
  {path:'acerto5', component:Acerto5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
