import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ JogosComponent } from './componentes/jogos/jogos.component';

const routes : Routes = [
{path: '', redirectTo: 'jogos', pathMatch: 'full'},
{path: 'jogos', component: JogosComponent},
{path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
