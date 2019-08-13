import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService, IData, ILabel, ILabelsData } from '../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'plg-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit, OnDestroy {

  private _getLabelsSubscriber: Subscription;
  private _getDataSubscriber: Subscription;
  private _lastSelected: number = null;

  public labels: Array<ILabel> = [<ILabel>{}];
  public selectedArr: Array<string> = ['contrast'];

  @Input('startWithTab') startWithTab: number = 1;

  @Output() onGetDataStarted: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGetDataSuccess: EventEmitter<IData> = new EventEmitter<IData>();
  @Output() onGetDataError: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this._getLabelsSubscriber = this.dataService.getLabels().subscribe((data: ILabelsData) => {
      this.selectedArr = data.items.map(() => null);
      this.labels = data.items;
      this.getData(this.startWithTab);
    })
  }

  ngOnDestroy() {
    this._getLabelsSubscriber.unsubscribe();
  }

  public getData(id: number) {

    this.onGetDataStarted.emit();

    if (this._lastSelected !== null) {
      this.selectedArr[this._lastSelected] = null;
    }

    let index = id - 1;
    this.selectedArr[index] = 'dark';

    this._lastSelected = index;

    if (this._getDataSubscriber) {
      this._getDataSubscriber.unsubscribe();
    }
    this._getDataSubscriber = this.dataService.getData(id).subscribe(
      (data: IData) => {
        this.onGetDataSuccess.emit(data);
      },
      (error: any) => {
        this.onGetDataError.emit(error);
      });
  }

}
