import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'plg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public reversArr = [false, true, false];

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService.onMobile(this.onMobile.bind(this));
  }

  onMobile(leave:boolean) {
    this.reversArr = [false, leave, false];
  }

}
