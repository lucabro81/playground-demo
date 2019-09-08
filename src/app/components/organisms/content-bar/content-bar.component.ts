import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'plg-content-bar',
  templateUrl: './content-bar.component.html',
  styleUrls: ['./content-bar.component.scss']
})
export class ContentBarComponent extends BaseComponent implements OnInit {

  @Input('img') img: string;
  @Input('cta') cta: string;
  @Input('reverse') reverse: boolean = false;
  @Input('styles') mobStyles: any = {};

  public styles: any = {};

  constructor(private _commonService: CommonService) {
    super();
  }

  ngOnInit() {

    this.styles = {
      'background-image': 'url(/assets/images/' + this.img + '.jpg)',
    };

    this._commonService.onMobile((leave) => {

      if (leave) {
        this.styles = Object.assign(this.styles, {'background-size': 'cover'});
      }
      else {
        this.styles = Object.assign(this.styles, this.mobStyles);
      }
    });

  }

}
