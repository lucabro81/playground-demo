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
    console.log("onGetDataSuccess data", data.item.content);
    this.stop = true;
    this.data = data.item.content.join('<br />');

    console.log('joined', this.data);
  }

  onGetDataError(err:any) {
    console.log("onGetDataError data", err);
    this.stop = true;
  }

}
