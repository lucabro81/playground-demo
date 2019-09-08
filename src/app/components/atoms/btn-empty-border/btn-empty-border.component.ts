import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-btn-empty-border',
  templateUrl: './btn-empty-border.component.html',
  styleUrls: ['./btn-empty-border.component.scss']
})
export class BtnEmptyBorderComponent extends BaseComponent implements OnInit {

  faAngleRight = faAngleRight;

  @Input('text') text: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
