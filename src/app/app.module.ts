import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { AsideBarrComponent } from './pages/aside-barr/aside-barr.component';
import { NavBarrComponent } from './pages/nav-barr/nav-barr.component';
import { AdherentComponent } from './entity/adherent/adherent.component';
import { CotisationComponent } from './entity/cotisation/cotisation.component';
import { RecetteComponent } from './entity/recette/recette.component';
import { TypeRecetteComponent } from './entity/type-recette/type-recette.component';
import { UtilisateurComponent } from './entity/utilisateur/utilisateur.component';
import { VersementComponent } from './entity/versement/versement.component';
import { ControlAsideComponent } from './pages/control-aside/control-aside.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddAdherentComponent } from './entity/adherent/add-adherent/add-adherent.component';
import { DeleteAdherentComponent } from './entity/adherent/delete-adherent/delete-adherent.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";
import { UpdateAdherentComponent } from './entity/adherent/update-adherent/update-adherent.component';
import { DetailsAdherentComponent } from './entity/adherent/details-adherent/details-adherent.component';
import { AddVersementComponent } from './entity/versement/add-versement/add-versement.component';
import { UpdateVersementComponent } from './entity/versement/update-versement/update-versement.component';
import { DeleteVersementComponent } from './entity/versement/delete-versement/delete-versement.component';
import { DetailsVersementComponent } from './entity/versement/details-versement/details-versement.component';
import { AddTypeRecetteComponent } from './entity/type-recette/add-type-recette/add-type-recette.component';
import { UpdateTypeRecetteComponent } from './entity/type-recette/update-type-recette/update-type-recette.component';
import { DeleteRecetteComponent } from './entity/type-recette/delete-recette/delete-recette.component';
import { DetailsRecetteComponent } from './entity/type-recette/details-recette/details-recette.component';
import { AddCotisationComponent } from './entity/cotisation/add-cotisation/add-cotisation.component';
import { UpdateCotisationComponent } from './entity/cotisation/update-cotisation/update-cotisation.component';
import { DetailsCotisationComponent } from './entity/cotisation/details-cotisation/details-cotisation.component';
import { DeleteCotisationComponent } from './entity/cotisation/delete-cotisation/delete-cotisation.component';
import { AddRecetteComponent } from './entity/recette/add-recette/add-recette.component';
import { UpdateRecetteComponent } from './entity/recette/update-recette/update-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideBarrComponent,
    NavBarrComponent,
    AdherentComponent,
    CotisationComponent,
    RecetteComponent,
    TypeRecetteComponent,
    UtilisateurComponent,
    VersementComponent,
    ControlAsideComponent,
    LoginComponent,
    RegisterComponent,
    AddAdherentComponent,
    DeleteAdherentComponent,
    DashboardComponent,
    ConfirmRegisterComponent,
    UpdateAdherentComponent,
    DetailsAdherentComponent,
    AddVersementComponent,
    UpdateVersementComponent,
    DeleteVersementComponent,
    DetailsVersementComponent,
    AddTypeRecetteComponent,
    UpdateTypeRecetteComponent,
    DeleteRecetteComponent,
    DetailsRecetteComponent,
    AddCotisationComponent,
    UpdateCotisationComponent,
    DetailsCotisationComponent,
    DeleteCotisationComponent,
    AddRecetteComponent,
    UpdateRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
