import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CorouselComponent } from './corousel/corousel.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { CardsComponent } from './cards/cards.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { VideoComponent } from './video/video.component';
import { FairComponent } from './fair/fair.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CorouselComponent,
    ActividadesComponent,
    ParallaxComponent,
    CardsComponent,
    CalendarioComponent,
    TutorialesComponent,
    VideoComponent,
    FairComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
