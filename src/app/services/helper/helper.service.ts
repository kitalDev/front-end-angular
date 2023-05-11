import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private jwtHelper : JwtHelperService = new JwtHelperService();
  private decodedToken : any;
  constructor() {
    this.decodedToken=this.jwtHelper.decodeToken(localStorage.getItem('token') as string);
  }

  get utilisateurId(): string {
    return this.decodedToken.utilisateurId;
  }
  get userFullName(): string{
    return this.decodedToken.fullname;
  }
}
