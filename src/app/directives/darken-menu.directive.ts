import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[plgDarkenMenu]'
})
export class DarkenMenuDirective {

  constructor(private el: ElementRef) { }

}
