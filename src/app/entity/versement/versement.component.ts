import { Component, OnInit } from '@angular/core';
import {VersementService} from "../../services/services/versement.service";
import {VersementDto} from "../../services/models/versement-dto";
import {AddAdherentComponent} from "../adherent/add-adherent/add-adherent.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../services/services/adherent.service";
import {HelperService} from "../../services/helper/helper.service";
import {AddVersementComponent} from "./add-versement/add-versement.component";
import {AdherentDto} from "../../services/models/adherent-dto";
import {UpdateAdherentComponent} from "../adherent/update-adherent/update-adherent.component";
import {DetailsAdherentComponent} from "../adherent/details-adherent/details-adherent.component";
import {DeleteAdherentComponent} from "../adherent/delete-adherent/delete-adherent.component";
import {UpdateVersementComponent} from "./update-versement/update-versement.component";
import {DetailsVersementComponent} from "./details-versement/details-versement.component";
import {DeleteVersementComponent} from "./delete-versement/delete-versement.component";

@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.scss']
})
export class VersementComponent implements OnInit {
versements : Array<VersementDto> =[];
  constructor(
    private versementServce: VersementService,
    protected modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.versementServce.findAll().subscribe(
      {
        next:(data)=>{
          this.versements=data
        }
      }
    )
  }

  add() {
      const modalRef = this.modalService.open(AddVersementComponent, { size: 'md', backdrop: 'static' });
      modalRef.componentInstance.versement;
    }
  update(versement: VersementDto): void {
    const modalRef = this.modalService.open(UpdateVersementComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.versement=versement;
  }
  detail(versement: VersementDto): void {
    const modalRef = this.modalService.open(DetailsVersementComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.versement=versement;
  }
  delete(versement: VersementDto): void {
    const modalRef = this.modalService.open(DeleteVersementComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.versement = versement;
  }
}
