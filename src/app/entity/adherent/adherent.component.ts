import {Component, NgModule, OnInit} from '@angular/core';
import {DeleteAdherentComponent} from "./delete-adherent/delete-adherent.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdherentService} from "../../services/services/adherent.service";
import {AdherentDto} from "../../services/models/adherent-dto";
import {AddAdherentComponent} from "./add-adherent/add-adherent.component";
import {UpdateAdherentComponent} from "./update-adherent/update-adherent.component";
import {DetailsAdherentComponent} from "./details-adherent/details-adherent.component";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {

  adherents: Array<AdherentDto>= [];

  constructor(
    protected modalService: NgbModal,
    private adherentService: AdherentService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.adherentService.findAllByUtilisateurId2({
      "utilisateur-id": this.helperService.utilisateurId
    }).subscribe(
      {
        next:(data)=>{
          this.adherents=data;
        }
      }
    );
  }
  add(): void {
    const modalRef = this.modalService.open(AddAdherentComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.adherent;
  }
  update(adherent: AdherentDto): void {
    const modalRef = this.modalService.open(UpdateAdherentComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.adherent=adherent;
  }
  detail(adherent: AdherentDto): void {
    const modalRef = this.modalService.open(DetailsAdherentComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.adherent=adherent;
  }
  delete(adherent: AdherentDto): void {
    const modalRef = this.modalService.open(DeleteAdherentComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.adherent = adherent;
  }
}
