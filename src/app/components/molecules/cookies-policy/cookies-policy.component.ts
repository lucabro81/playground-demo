import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent extends BaseComponent implements OnInit {

  constructor(private _viewContainerRef:ViewContainerRef) {
    super();
  }

  ngOnInit() {
  }

  close() {
    // ref.: https://stackoverflow.com/a/47510560/1619070 da verificare se non crea problemi e/o si può semplificare
    this._viewContainerRef
        .element
        .nativeElement
        .parentElement
        .removeChild(this._viewContainerRef.element.nativeElement);
  }
}
