import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/cliente/accueil/accueil.component';
import { AcceuilComponent } from './pages/coiffeuse/acceuil/acceuil.component';
import { ProfilComponent } from './pages/coiffeuse/dashboard/profil/profil.component';
import { ConnexionComponent } from './shares/components/connexion/connexion.component';
import { InscriptionComponent } from './shares/components/inscription/inscription.component';

const routes: Routes = [
  {path:'cliente', redirectTo: 'cliente/accueil', pathMatch: 'full'},
  {path : 'cliente/accueil', component: AccueilComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'coiffeuse', redirectTo: 'coiffeuse/acceuil', pathMatch: 'full'},
  {path:'coiffeuse/acceuil', component:AcceuilComponent},
  {path: 'coiffeuse/dashboard', redirectTo: 'profil', pathMatch: 'full'},
  {path:'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
