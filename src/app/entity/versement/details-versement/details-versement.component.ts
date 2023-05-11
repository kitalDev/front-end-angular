import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {VersementDto} from "../../../services/models/versement-dto";
import {VersementService} from "../../../services/services/versement.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-versement',
  templateUrl: './details-versement.component.html',
  styleUrls: ['./details-versement.component.scss']
})
export class DetailsVersementComponent implements OnInit {
  versement: VersementDto={};

  constructor(
    private activeModal: NgbActiveModal,
    private versementService: VersementService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.versementService.findAll();
  }

  getById(){
    this.versementService.findById({
      "id": this.activeRoute.snapshot.params['id']
    }).subscribe(
      {
        next: (data)=>{
          this.versement=data;
        }
      }
    )
  }
  cancel() {
    this.activeModal.dismiss();
  }
}
