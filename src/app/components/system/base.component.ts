import { Input } from '@angular/core';

export class BaseComponent {
  @Input('theme') theme: string;
}
