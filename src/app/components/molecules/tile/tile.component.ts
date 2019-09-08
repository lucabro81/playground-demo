import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'plg-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent extends BaseComponent implements OnInit {

  @Input('titleBg') titleBg;
  @Input('styles') styles: any = {};

  constructor(private _commonService: CommonService) {
    super();
  }

  ngOnInit() {

    this.styles = Object.assign(this.styles, {
      'background-image': 'url(/assets/images/' + this.titleBg + ')',
    });
  }

}
