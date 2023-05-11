import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-aside-barr',
  templateUrl: './aside-barr.component.html',
  styleUrls: ['./aside-barr.component.scss']
})
export class AsideBarrComponent implements OnInit {
fullname?: string;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.fullname=this.helperService.userFullName;
  }

}
