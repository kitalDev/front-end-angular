import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../../services/services/adherent.service";
import {AdherentDto} from "../../../services/models/adherent-dto";
import {ActivatedRoute, CanActivate} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.service";

@Component({
  selector: 'app-update-adherent',
  templateUrl: './update-adherent.component.html',
  styleUrls: ['./update-adherent.component.scss']
})
export class UpdateAdherentComponent implements OnInit {
adherent:AdherentDto= {};
  errorMsg: Array<string>= [];
  constructor(
    private activeModal: NgbActiveModal,
    private adherentService: AdherentService,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.activeModal.dismiss();
  }

  getAdherent(){
    this.adherent.utilisateurId= this.helperService.utilisateurId
    this.adherentService.findById5(this.activatedRoute.snapshot.params['id']).subscribe(
      {
        next:(data)=>{
          this.adherent=data;
        }
      }
    );
  }

  updateSaved(){
    this.adherent.utilisateurId= this.helperService.utilisateurId
    this.errorMsg=[];
    this.adherentService.update5({
      body:this.adherent
    }).subscribe();
    this.adherentService.findAll5();
    this.cancel();
  }
}
