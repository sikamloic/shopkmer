import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { InscriptionComponent } from './shares/components/inscription/inscription.component';
import { ConnexionComponent } from './shares/components/connexion/connexion.component';
import { MaterialModule } from './shares/modules/materials/materials.module';
import { AccueilComponent } from './pages/cliente/accueil/accueil.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AcceuilComponent } from './pages/coiffeuse/acceuil/acceuil.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalerieComponent } from './pages/coiffeuse/dashboard/galerie/galerie.component';
import { PrestationComponent } from './pages/coiffeuse/dashboard/prestation/prestation.component';
import { ProfilComponent } from './pages/coiffeuse/dashboard/profil/profil.component';
import { MessagerieComponent } from './pages/coiffeuse/dashboard/messagerie/messagerie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    AcceuilComponent,
    GalerieComponent,
    PrestationComponent,
    ProfilComponent,
    MessagerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
