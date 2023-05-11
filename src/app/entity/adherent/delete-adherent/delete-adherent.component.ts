import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentDto} from "../../../services/models/adherent-dto";
import {AdherentService} from "../../../services/services/adherent.service";

@Component({
  selector: 'app-delete-adherent',
  templateUrl: './delete-adherent.component.html',
  styleUrls: ['./delete-adherent.component.scss']
})
export class DeleteAdherentComponent implements OnInit {
  adherent?: AdherentDto
  constructor(
    public activeModal: NgbActiveModal,
    private adherentService: AdherentService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
  this.adherentService.findAll5();
}
  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
  this.adherentService.deleteById5({id}).subscribe(() => {
      this.activeModal.close();
    });
    this.getAll();
  }

}
