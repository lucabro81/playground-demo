import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent extends BaseComponent implements OnInit {

  public titleType: any;
  public paragraphType: any;
  @Input('cta') cta: string;
  constructor(public commonService: CommonService) {
    super();
    this.titleType = this.commonService.titleType;
    this.paragraphType = this.commonService.paragraphType;
  }

  ngOnInit() {
  }

}
