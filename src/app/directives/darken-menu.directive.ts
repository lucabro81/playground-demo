import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[plgDarkenMenu]'
})
export class DarkenMenuDirective {

  @HostBinding('class.darken') isDark:boolean = false;

  constructor(private el: ElementRef) {
    console.log("DarkenMenuDirective", el);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    console.log(document.documentElement.scrollTop );

    if (document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200) {
      this.isDark = true;
    }
    else {
      this.isDark = false;
    }
    // if (document.body.scrollTop > 20 ||
    //   document.documentElement.scrollTop > 20) {
    //   document.getElementById('subTitle').classList.add('red');
    //   document.getElementById('paragraph').classList.add('green');
    // }
  }
}
