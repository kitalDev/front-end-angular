import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../../services/services/adherent.service";
import {ActivatedRoute} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.service";
import {VersementService} from "../../../services/services/versement.service";
import {VersementDto} from "../../../services/models/versement-dto";

@Component({
  selector: 'app-update-versement',
  templateUrl: './update-versement.component.html',
  styleUrls: ['./update-versement.component.scss']
})
export class UpdateVersementComponent implements OnInit {
  versement: VersementDto={}
  constructor(
    private activeModal: NgbActiveModal,
    private activatedRoute: ActivatedRoute,
    private versementService: VersementService,
  ) { }

  ngOnInit(): void {
   this.getAll();
  }
  cancel():void{
    this.activeModal.dismiss();
  }
  getAll(){
    this.versementService.findAll();
}

  getAllById(){
    this.versementService.findById(this.activatedRoute.snapshot.params['id']).subscribe(
      {
        next:(data)=>{
          this.versement=data;
        }
      }
    );
  }


  updateVersement(){
    this.versementService.update({
      body:this.versement
    }).subscribe();
    this.getAll();
    this.cancel();
  }

}
