import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends BaseComponent implements OnInit, OnChanges {

  public classes: any = {};

  @Input('selected') selected:string = null;
  @Input('text') text:any = null;
  constructor() {
    super();
  }

  ngOnInit() {
    this._setButtonTheme();
  }

  ngOnChanges() {
    this._setButtonTheme();
  }

  private _setButtonTheme() {
    if (this.selected) {
      this.classes = {};
      this.classes['theme-' + this.selected] = true;
      this.classes['selected'] = true;
    }
    else {
      this.classes['theme-' + this.theme] = true;
      this.classes['selected'] = false;
    }
  }

}
