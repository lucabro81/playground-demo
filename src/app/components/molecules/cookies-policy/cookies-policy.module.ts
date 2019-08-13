import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPolicyComponent } from './cookies-policy.component';
import { BtnFullModule } from '../../atoms/btn-full/btn-full.module';

@NgModule({
  declarations: [CookiesPolicyComponent],
  imports: [
    CommonModule,
    BtnFullModule
  ],
  exports: [CookiesPolicyComponent]
})
export class CookiesPolicyModule { }
