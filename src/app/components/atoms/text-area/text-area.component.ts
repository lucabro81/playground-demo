import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../system/base.component';

@Component({
  selector: 'plg-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends BaseComponent implements OnInit {

  @Input('placeholder') placeholder:string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
