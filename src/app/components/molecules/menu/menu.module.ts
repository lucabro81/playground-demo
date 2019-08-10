import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { BtnEmptyMenuComponent } from '../../atoms/btn-empty-menu/btn-empty-menu.component';

@NgModule({
  declarations: [MenuComponent, BtnEmptyMenuComponent],
  imports: [
    CommonModule,
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
