import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationRessourceService} from "../../services/services/authentification-ressource.service";
import {UtilisateurDto} from "../../services/models/utilisateur-dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  utilisateurDto: UtilisateurDto  = { id:'',prenom:'',nom:'',email:'',password:''}
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private authService: AuthentificationRessourceService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigateByUrl("/login")
  }

  registerSaved() {
    this.errorMsg=[];
    this.authService.register({body: this.utilisateurDto}).subscribe(
      {
        next:(data)=>{
          this.router.navigateByUrl("/confirm-register");
        },
        error:(err)=>{
          this.errorMsg=err.error.validatorsErros;
        }
      }
    );
  }
}
