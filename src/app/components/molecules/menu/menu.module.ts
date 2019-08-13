import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { BtnEmptyMenuModule } from '../../atoms/btn-empty-menu/btn-empty-menu.module';
import { DarkenMenuDirective } from '../../../directives/darken-menu.directive';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BtnEmptyMenuModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
