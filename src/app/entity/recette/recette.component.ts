import { Component, OnInit } from '@angular/core';
import {AddCotisationComponent} from "../cotisation/add-cotisation/add-cotisation.component";
import {CotisationDto} from "../../services/models/cotisation-dto";
import {UpdateCotisationComponent} from "../cotisation/update-cotisation/update-cotisation.component";
import {AdherentDto} from "../../services/models/adherent-dto";
import {DetailsCotisationComponent} from "../cotisation/details-cotisation/details-cotisation.component";
import {DeleteCotisationComponent} from "../cotisation/delete-cotisation/delete-cotisation.component";
import {RecetteDto} from "../../services/models/recette-dto";
import {RecetteService} from "../../services/services/recette.service";
import {HelperService} from "../../services/helper/helper.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddRecetteComponent} from "./add-recette/add-recette.component";
import {UpdateRecetteComponent} from "./update-recette/update-recette.component";
import {DetailsRecetteComponent} from "./details-recette/details-recette.component";
import {DeleteRecetteComponent} from "./delete-recette/delete-recette.component";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
  recette:RecetteDto ={}
  recettes : RecetteDto[]=[];
  constructor(
    private recetteService : RecetteService,
    private helperService: HelperService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.recetteService.findAllByUtilisateurId({
      "utilisateur-id": this.helperService.utilisateurId
    }).subscribe(
      {
        next:(data)=>{
          this.recettes=data;
        }
      }
    )
  }

  add(): void {
    const modalRef = this.modalService.open(AddRecetteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.cotisation;
  }
  update(recette: RecetteDto): void {
    const modalRef = this.modalService.open(UpdateRecetteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.recette=recette;
  }
  detail(recette: RecetteDto): void {
    const modalRef = this.modalService.open(DetailsRecetteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.recette=recette;
  }
  delete(recette: RecetteDto): void {
    const modalRef = this.modalService.open(DeleteRecetteComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.recette = recette;
  }
}
