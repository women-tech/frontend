import { ScienceComponent } from './science/science.component';
import { FairComponent } from './fair/fair.component';
import { InicioComponent } from './inicio/inicio.component';
import {CarrerasComponent} from './carreras/carreras.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: 'index', component: InicioComponent},
  { path: 'women+science', component: ScienceComponent },
  { path: 'fair', component: FairComponent },
  { path: 'carreras', component: CarrerasComponent },
  { path: '',   redirectTo: 'index', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
