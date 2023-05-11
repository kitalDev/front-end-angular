import { Component, OnInit } from '@angular/core';
import {AdherentDto} from "../../../services/models/adherent-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../../services/services/adherent.service";
import {HelperService} from "../../../services/helper/helper.service";

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.scss']
})
export class AddAdherentComponent implements OnInit {
  adherent: AdherentDto = {};
  errorMsg: Array<string>= [];

  constructor(
      private activeModal: NgbActiveModal,
      private adherentService: AdherentService,
      private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.adherentService.findAll5();
  }

  cancel():void{
    this.activeModal.dismiss();
  }

  saveAdherent() {
    this.errorMsg=[];
    this.adherent.utilisateurId= this.helperService.utilisateurId
    this.adherentService.save5(
      {
        body:this.adherent
      }
    ).subscribe();
    this.adherentService.findAll5();
    this.cancel();
  }
}
