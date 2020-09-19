import { CardsComponent } from './cards/cards.component';
import { FairComponent } from './fair/fair.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'index', component: InicioComponent},
  { path: 'cards', component: CardsComponent },
  { path: 'fair', component: FairComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
