import { Component } from '@angular/core';
import { TitleType } from './utils/Enums';

@Component({
  selector: 'plg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public static TITLE_TYPE: TitleType;

  title = 'playground-demo';
}
