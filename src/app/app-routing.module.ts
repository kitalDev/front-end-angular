import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AdherentComponent} from "./entity/adherent/adherent.component";
import {CotisationComponent} from "./entity/cotisation/cotisation.component";
import {RecetteComponent} from "./entity/recette/recette.component";
import {TypeRecetteComponent} from "./entity/type-recette/type-recette.component";
import {VersementComponent} from "./entity/versement/versement.component";
import {UtilisateurComponent} from "./entity/utilisateur/utilisateur.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ConfirmRegisterComponent} from "./pages/confirm-register/confirm-register.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'confirm-register',
    component: ConfirmRegisterComponent
  },
  {
    path:'utilisateur',
    component:UtilisateurComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'adherent',
        component: AdherentComponent
      },
      {
        path: 'adherent/:id',
        component: AdherentComponent
      },
      {
        path: 'cotisation',
        component: CotisationComponent
      },
      {
        path: 'recette',
        component: RecetteComponent
      },
      {
        path: 'type-recette',
        component: TypeRecetteComponent
      },
      {
        path: 'versement',
        component: VersementComponent
      },
      {
        path: 'versement/:id',
        component: VersementComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
