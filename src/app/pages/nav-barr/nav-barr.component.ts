import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-nav-barr',
  templateUrl: './nav-barr.component.html',
  styleUrls: ['./nav-barr.component.scss']
})
export class NavBarrComponent implements OnInit {
 fullname?:string;
  constructor(
private helperService:HelperService
  ) {
  }

  ngOnInit(): void {
    this.fullname=this.helperService.userFullName;
  }

}
