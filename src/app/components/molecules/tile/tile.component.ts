import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent extends BaseComponent implements OnInit {

  @Input('titleBg') titleBg;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
