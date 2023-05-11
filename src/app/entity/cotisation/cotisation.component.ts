import { Component, OnInit } from '@angular/core';
import {CotisationService} from "../../services/services/cotisation.service";
import {CotisationDto} from "../../services/models/cotisation-dto";
import {HelperService} from "../../services/helper/helper.service";
import {AddAdherentComponent} from "../adherent/add-adherent/add-adherent.component";
import {AdherentDto} from "../../services/models/adherent-dto";
import {UpdateAdherentComponent} from "../adherent/update-adherent/update-adherent.component";
import {DetailsAdherentComponent} from "../adherent/details-adherent/details-adherent.component";
import {DeleteAdherentComponent} from "../adherent/delete-adherent/delete-adherent.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddCotisationComponent} from "./add-cotisation/add-cotisation.component";
import {UpdateCotisationComponent} from "./update-cotisation/update-cotisation.component";
import {DetailsCotisationComponent} from "./details-cotisation/details-cotisation.component";
import {DeleteCotisationComponent} from "./delete-cotisation/delete-cotisation.component";

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.scss']
})
export class CotisationComponent implements OnInit {
  cotisation: CotisationDto= {};
  cotisations : Array<CotisationDto> = [];
  constructor(
    private cotisationService: CotisationService,
    private helperService: HelperService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.cotisationService.findAllByUtilisateurId1(
      {
        "utilisateur-id": this.helperService.utilisateurId
      }
    ).subscribe(
      {
        next:(data)=>{
          this.cotisations=data;
        }, error:(err)=>{
          console.log(err)
        }
      }
    )
  }
  add(): void {
    const modalRef = this.modalService.open(AddCotisationComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.cotisation;
  }
  update(cotisation: CotisationDto): void {
    const modalRef = this.modalService.open(UpdateCotisationComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.cotisation=cotisation;
  }
  detail(cotisation: CotisationDto): void {
    const modalRef = this.modalService.open(DetailsCotisationComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.cotisation=cotisation;
  }
  delete(cotisation: CotisationDto): void {
    const modalRef = this.modalService.open(DeleteCotisationComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.cotisation = cotisation;
  }
}
