import { ScienceComponent } from './science/science.component';
import { FairComponent } from './fair/fair.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'index', component: InicioComponent},
  { path: 'women+science', component: ScienceComponent },
  { path: 'fair', component: FairComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
