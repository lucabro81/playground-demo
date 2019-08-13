import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'plg-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends BaseComponent implements OnInit, OnChanges {

  public value: string;
  public _value: string;

  @Input('placeholder') placeholder: string;
  @Input('control') control: FormControl;
  @Input('required') required: boolean = false;
  @Input('errMessage') errMessage: any = null;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngOnChanges() {

    this.value = this.control.value;

    if (this.errMessage != null) {
      this._value = ((this.control.value !== '') ? ` (${this.control.value})` : '');
      this.value = this.errMessage + this._value;
    }
  }

  onclick() {
    if (this.errMessage != null) {
      this.errMessage = null;
      this.value = this._value
    }
  }

}
