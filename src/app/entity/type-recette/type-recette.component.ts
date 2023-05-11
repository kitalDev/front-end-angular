import { Component, OnInit } from '@angular/core';
import {AddVersementComponent} from "../versement/add-versement/add-versement.component";
import {UpdateVersementComponent} from "../versement/update-versement/update-versement.component";
import {DetailsVersementComponent} from "../versement/details-versement/details-versement.component";
import {DeleteVersementComponent} from "../versement/delete-versement/delete-versement.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TypeRecetteDto} from "../../services/models/type-recette-dto";
import {TyperecetteService} from "../../services/services/typerecette.service";

@Component({
  selector: 'app-type-recette',
  templateUrl: './type-recette.component.html',
  styleUrls: ['./type-recette.component.scss']
})
export class TypeRecetteComponent implements OnInit {
  typeRecette: TypeRecetteDto ={}
  typeRecettes: TypeRecetteDto[]=[];
  constructor(
    private modalService: NgbModal,
    private typeRecetteServie: TyperecetteService
  ) { }

  ngOnInit(): void {
    this.typeRecetteServie.findAll2().subscribe(
      {
        next:(data)=>{
          this.typeRecettes=data;
        }
      }
    )
  }

  add() {
    const modalRef = this.modalService.open(AddVersementComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.typeRecette;
  }
  update(typeRecette: TypeRecetteDto): void {
    const modalRef = this.modalService.open(UpdateVersementComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.typeRecette=typeRecette;
  }
  detail(typeRecette: TypeRecetteDto): void {
    const modalRef = this.modalService.open(DetailsVersementComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.typeRecette=typeRecette;
  }
  delete(typeRecette: TypeRecetteDto): void {
    const modalRef = this.modalService.open(DeleteVersementComponent, { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.typeRecette = typeRecette;
  }

}
