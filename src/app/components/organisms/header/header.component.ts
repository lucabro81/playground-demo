import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';

@Component({
  selector: 'plg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  public carouselInterval: number = null;
  public carouselTimeout: number = null;
  public carouselIndex: number;
  public classArr: Array<any>;

  constructor() {
    super();

    this.classArr = [];

    this.classArr.push({'slide': true, 'slide-1': true, 'show': false, 'active': false});
    this.classArr.push({'slide': true, 'slide-2': true, 'show': false, 'active': false});
    this.classArr.push({'slide': true, 'slide-3': true, 'show': false, 'active': false});

  }

  ngOnInit() {
    this._initCarousel(0);
  }

  ngOnDestroy() {
    clearTimeout(this.carouselTimeout);
    clearInterval(this.carouselInterval);
    this.classArr = [];
  }

  selectSlide(i: number) {
    this._initCarousel(i);
  }

  private _initCarousel(i: number) {

    this.classArr.forEach((obj, current) => {
      if (current === i) {
        obj['show'] = true;
        obj['active'] = true;
      }
      else {
        obj['show'] = false;
        obj['active'] = false;
      }
    });

    clearTimeout(this.carouselTimeout);
    clearInterval(this.carouselInterval);

    const l: number = this.classArr.length;
    this.carouselIndex = i;

    this.classArr[i]['show'] = true;
    this.classArr[i]['active'] = true;

    this.carouselInterval = window.setInterval(
      () => {
        const lastIndex = this.carouselIndex;
        clearTimeout(this.carouselTimeout);
        this.carouselTimeout = setTimeout(() => {
          this.classArr[lastIndex]['show'] = false;
        }, 1000);
        this.classArr[lastIndex]['active'] = false;
        this.carouselIndex++;
        if (this.carouselIndex === l) {
          this.carouselIndex = 0;
        }
        this.classArr[this.carouselIndex]['show'] = true;
        this.classArr[this.carouselIndex]['active'] = true;

        console.log(this.classArr);
      }, 4000
    );
  }

}
