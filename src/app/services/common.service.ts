import { Injectable } from '@angular/core';
import { ParagraphType, TitleType } from '../utils/Enums';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public titleType = TitleType;
  public paragraphType = ParagraphType;
  constructor() { }
}
