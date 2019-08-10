import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-btn-empty-menu',
  templateUrl: './btn-empty-menu.component.html',
  styleUrls: ['./btn-empty-menu.component.scss']
})
export class BtnEmptyMenuComponent extends BaseComponent implements OnInit {

  @Input('text') text: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
