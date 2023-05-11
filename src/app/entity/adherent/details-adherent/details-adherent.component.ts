import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../../services/services/adherent.service";
import {ActivatedRoute} from "@angular/router";
import {AdherentDto} from "../../../services/models/adherent-dto";

@Component({
  selector: 'app-details-adherent',
  templateUrl: './details-adherent.component.html',
  styleUrls: ['./details-adherent.component.scss']
})
export class DetailsAdherentComponent implements OnInit {
adherent:AdherentDto= {}
  constructor(
    private activeModal: NgbActiveModal,
    private adherentService: AdherentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  detailAdherent(){
    this.adherentService.findById5({
      "id": this.activatedRoute.snapshot.params['id']
    }).subscribe(
      {
        next:(data)=>{
          this.adherent=data;
        }
      }
    )
  }
  cancel():void{
    this.activeModal.dismiss();
  }

}
