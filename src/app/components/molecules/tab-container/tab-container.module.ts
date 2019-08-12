import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container.component';
import { TabComponent } from '../../atoms/tab/tab.component';
import { LoaderModule } from '../../atoms/loader/loader.module';

@NgModule({
  declarations: [TabContainerComponent, TabComponent],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [TabContainerComponent]
})
export class TabContainerModule { }
