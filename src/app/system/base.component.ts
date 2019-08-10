import { Input } from '@angular/core';
import * as titleType from '../utils/Enums';

export class BaseComponent {
  public title_type = titleType;
  @Input('theme') theme: string;
}
