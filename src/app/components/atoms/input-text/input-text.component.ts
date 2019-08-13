import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends BaseComponent implements OnInit, OnChanges {

  public value: string;
  public _value: string;

  @Input('placeholder') placeholder: string;
  @Input('control') control: FormControl = new FormControl();
  @Input('required') required: boolean = false;
  @Input('email') email: boolean = false;
  @Input('errMessage') errMessage: any = null;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngOnChanges() {

      this.value = this.control.value;

      console.log("placeholder", this.placeholder);

      if (this.errMessage != null) {
        this._value = ((this.control.value !== '') ? ` (${this.control.value})` : '');
        this.value = this.errMessage + this._value;
      }
  }

  onclick() {
    if (this.errMessage != null) {
      this.errMessage = null;
      this.value = this._value.trim().substring(1, this._value.length-2);
    }
  }

}
