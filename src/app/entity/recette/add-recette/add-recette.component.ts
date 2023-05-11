import { Component, OnInit } from '@angular/core';
import {RecetteService} from "../../../services/services/recette.service";
import {HelperService} from "../../../services/helper/helper.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RecetteDto} from "../../../services/models/recette-dto";

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent implements OnInit {
  recette: RecetteDto = {};
  errorMsg: Array<string> = [];

  constructor(
    private recetteService: RecetteService,
    private helperService : HelperService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  saveRecette() {

  }

  cancel() {
    this.activeModal.dismiss();
  }
}
