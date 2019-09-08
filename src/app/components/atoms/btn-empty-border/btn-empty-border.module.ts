import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnEmptyBorderComponent } from './btn-empty-border.component';

@NgModule({
  declarations: [BtnEmptyBorderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [BtnEmptyBorderComponent]
})
export class BtnEmptyBorderModule {
}
