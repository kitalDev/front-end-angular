import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationRequest} from "../../services/models/authentification-request";
import {AuthentificationRessourceService} from "../../services/services/authentification-ressource.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth:AuthentificationRequest={};
  errorMsgs:Array<string>= [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthentificationRessourceService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.errorMsgs= [];
    this.authenticationService.authenticate({
      body: this.auth
    }).subscribe({
      next:(data)=>{
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token as string);
        if (decodedToken.authorities[0].authority=='ROLE_USER') {
          this.router.navigateByUrl("/utilisateur/dashboard");
        }
      },
      error:(err)=>{
        this.errorMsgs.push(err.error.errorMessage);
      }
    })
  }

  register(){
    this.router.navigateByUrl("/register")
  }
}
