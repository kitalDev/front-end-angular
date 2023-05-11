import { Component, OnInit } from '@angular/core';
import {TypeRecetteDto} from "../../../services/models/type-recette-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TyperecetteService} from "../../../services/services/typerecette.service";

@Component({
  selector: 'app-add-type-recette',
  templateUrl: './add-type-recette.component.html',
  styleUrls: ['./add-type-recette.component.scss']
})
export class AddTypeRecetteComponent implements OnInit {
  typeRecette: TypeRecetteDto = {};
  errorMsg: any;

  constructor(
    private ngModal: NgbActiveModal,
    private typeRecetteService: TyperecetteService
  ) { }

  ngOnInit(): void {
    this.getTpRecette()
  }
  getTpRecette(){
    this.typeRecetteService.findAll2();
  }
  saveTypeRecette() {
    this.errorMsg=[];
    this.typeRecetteService.save2(
      {
        body:this.typeRecette
      }
    ).subscribe();
    this.getTpRecette();
    this.cancel();
  }

  cancel(){
    this.ngModal.dismiss();
  }
}
