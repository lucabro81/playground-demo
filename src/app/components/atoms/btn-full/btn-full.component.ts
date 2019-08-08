import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../system/base.component';

@Component({
  selector: 'plg-btn-full',
  templateUrl: './btn-full.component.html',
  styleUrls: ['./btn-full.component.scss']
})
export class BtnFullComponent extends BaseComponent implements OnInit {

  @Input('text') text: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
