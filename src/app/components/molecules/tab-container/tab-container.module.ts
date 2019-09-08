import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container.component';
import { TabComponent } from '../../atoms/tab/tab.component';
import { LoaderModule } from '../../atoms/loader/loader.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TabContainerComponent, TabComponent],
  imports: [
    CommonModule,
    LoaderModule,
    FontAwesomeModule
  ],
  exports: [TabContainerComponent]
})
export class TabContainerModule { }
