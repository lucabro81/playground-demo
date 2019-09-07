import { Injectable } from '@angular/core';
import { ParagraphType, TitleType } from '../utils/Enums';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public titleType = TitleType;
  public paragraphType = ParagraphType;

  private _MOBILE_RES = 899;
  private _firstCall = true;

  constructor() { }

  /**
   * listen for window's width resize, executes handler when mobile's resolution is reached
   *
   * @param handler
   * @returns {Subscription}
   */
  onMobile(handler: (leave:boolean) => void): Subscription {

    let reached = false;

    if (this._firstCall) {
      if (window.innerWidth <= this._MOBILE_RES) {
        handler(reached);
        reached = !reached;
      }
      this._firstCall = !this._firstCall;
    }

    let resize = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth)
      );

    return resize.subscribe((width) => {
      if (((width <= this._MOBILE_RES) && !reached) || ((width > this._MOBILE_RES) && reached)) {
        handler(reached);
        reached = !reached;
      }
    });
  }

}
