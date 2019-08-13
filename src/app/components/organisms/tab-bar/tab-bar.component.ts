import { Component, OnInit } from '@angular/core';
import { IData } from '../../../services/data.service';

@Component({
  selector: 'plg-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  public stop:boolean = true;
  public data:string = '';
  constructor() { }

  ngOnInit() {
  }

  onGetDataStarted() {
    this.stop = false;
  }

  onGetDataSuccess(data:IData) {
    this.stop = true;
    this.data = data.item.content.join('<br />');
  }

  onGetDataError(err:any) {
    this.stop = true;
  }

}
