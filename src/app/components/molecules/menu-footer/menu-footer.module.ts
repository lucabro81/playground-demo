import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFooterComponent } from './menu-footer.component';
import { BtnEmptyMenuModule } from '../../atoms/btn-empty-menu/btn-empty-menu.module';

@NgModule({
  declarations: [MenuFooterComponent],
  imports: [
    CommonModule,
    BtnEmptyMenuModule
  ],
  exports: [MenuFooterComponent]
})
export class MenuFooterModule { }
