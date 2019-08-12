import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plg-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input('stop') stop:boolean;
  constructor() { }

  ngOnInit() {
  }

}
