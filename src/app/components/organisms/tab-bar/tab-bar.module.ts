import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './tab-bar.component';

@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule
  ],
  exports: [TabBarComponent]
})
export class TabBarModule { }
