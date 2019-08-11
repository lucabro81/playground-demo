import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-content-bar',
  templateUrl: './content-bar.component.html',
  styleUrls: ['./content-bar.component.scss']
})
export class ContentBarComponent extends BaseComponent implements OnInit {

  @Input('img') img: string;
  @Input('cta') cta: string;
  @Input('reverse') reverse: boolean = false;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
