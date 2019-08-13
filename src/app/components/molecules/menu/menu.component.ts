import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'plg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent implements OnInit {

  public titleType: any;
  constructor(public commonService: CommonService) {
    super();
    this.titleType = this.commonService.titleType;
  }

  ngOnInit() {
  }

}
