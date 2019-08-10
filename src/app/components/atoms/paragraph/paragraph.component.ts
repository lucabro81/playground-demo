import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent extends BaseComponent implements OnInit {

  @Input('type') type: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
