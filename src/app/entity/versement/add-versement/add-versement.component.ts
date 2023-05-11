import { Component, OnInit } from '@angular/core';
import {VersementDto} from "../../../services/models/versement-dto";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {VersementService} from "../../../services/services/versement.service";

@Component({
  selector: 'app-add-versement',
  templateUrl: './add-versement.component.html',
  styleUrls: ['./add-versement.component.scss']
})
export class AddVersementComponent implements OnInit {
  versement: VersementDto= {}
  errorMsg: Array<string>= [];

  constructor(
    private activeModal: NgbActiveModal,
    private versementService: VersementService,
  ) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.activeModal.dismiss();
  }

  saveVersement() {
    this.errorMsg=[];
    this.versementService.save(
      {
        body:this.versement
      }
    ).subscribe();
    this.versementService.findAll();
    this.cancel();
  }
}
