import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnEmptyMenuModule } from '../../atoms/btn-empty-menu/btn-empty-menu.module';
import { MenuMobileComponent } from './menu-mobile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuMobileComponent],
  imports: [
    CommonModule,
    BtnEmptyMenuModule,
    FontAwesomeModule,
  ],
  exports: [MenuMobileComponent]
})
export class MenuMobileModule { }
