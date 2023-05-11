import { Component, OnInit } from '@angular/core';
import {VersementDto} from "../../../services/models/versement-dto";
import {VersementService} from "../../../services/services/versement.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-versement',
  templateUrl: './delete-versement.component.html',
  styleUrls: ['./delete-versement.component.scss']
})
export class DeleteVersementComponent implements OnInit {

  versement?: VersementDto
  constructor(
    private versementService:VersementService,
    private activeModal:NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.versementService.findAll();
  }

  confirmDelete(id: string): void {
    this.versementService.deleteById({id}).subscribe();
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
