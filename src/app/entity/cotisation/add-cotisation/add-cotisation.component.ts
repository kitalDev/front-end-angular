import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CotisationService} from "../../../services/services/cotisation.service";
import {CotisationDto} from "../../../services/models/cotisation-dto";
import {HelperService} from "../../../services/helper/helper.service";

@Component({
  selector: 'app-add-cotisation',
  templateUrl: './add-cotisation.component.html',
  styleUrls: ['./add-cotisation.component.scss']
})
export class AddCotisationComponent implements OnInit {
  cotisation : CotisationDto = {}
  errorMsg: Array<string>= [];
  constructor(
    private activeModal: NgbActiveModal,
    private helperService: HelperService,
    private cotisationService: CotisationService
    ) { }

  ngOnInit(): void {
    this.getCotisations()
  }

  cancel() {
    this.activeModal.dismiss();
  }

  getCotisations(){
    this.cotisationService.findAllByUtilisateurId1({
      "utilisateur-id":this.helperService.utilisateurId
    })
  }
  saveCotisation() {
    this.errorMsg=[];
    this.cotisation.utilisateurId= this.helperService.utilisateurId
    this.cotisationService.save4(
      {
        body:this.cotisation
      }
    ).subscribe();
    this.cancel();
    this.getCotisations();
  }
}
