import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getData(id: number):Observable<IData> {
    return Observable.create((observer: Observer<IData>) => {
      setTimeout(() => {
        this.http.get<IData>(`assets/data/tab${id}.json`)
            .subscribe(
              (data:IData) => {
                observer.next(data);
              },
              (error) => {
                observer.error(error);
              });
      }, 2000);

    });

  }

  public getLabels():Observable<ILabelsData> {
    return Observable.create((observer: Observer<ILabelsData>) => {
      setTimeout(() => {
        this.http.get<ILabelsData>('assets/data/labels.json')
            .subscribe(
              (data:ILabelsData) => {
                observer.next(data);
              },
              (error) => {
                observer.error(error);
              });
      }, 2000);
    });
  }

  public sendFormData(data:any):Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('inviesto!');
      }, 2000);
    });
  }
}

export interface IDetail {
  title: string,
  content: Array<string>
}

export interface ILabel {
  id: number,
  label: string
}

export interface IData {
  item: IDetail;
}

export interface ILabelsData {
  items: Array<ILabel>;
}
