import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends BaseComponent implements OnInit {

  @Input('placeholder') placeholder: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
