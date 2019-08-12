import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './tab-bar.component';
import { TabContainerModule } from '../../molecules/tab-container/tab-container.module';
import { LoaderModule } from '../../atoms/loader/loader.module';

@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule,
    TabContainerModule,
    LoaderModule
  ],
  exports: [TabBarComponent]
})
export class TabBarModule { }
