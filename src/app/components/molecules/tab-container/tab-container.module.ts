import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container.component';
import { TabComponent } from '../../atoms/tab/tab.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderModule } from '../../atoms/loader/loader.module';

@NgModule({
  declarations: [TabContainerComponent, TabComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    LoaderModule
  ],
  exports: [TabContainerComponent]
})
export class TabContainerModule { }
