import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { CommonService } from "../../../services/common.service";

@Component({
  selector: 'plg-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent extends BaseComponent implements OnInit {

  @Input('type') type: string;
  constructor(public commonService: CommonService) {
    super();
  }

  ngOnInit() {
    console.log('commonService', this.commonService);
  }

}
