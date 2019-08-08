import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { TextAreaComponent } from '../../atoms/text-area/text-area.component';

@NgModule({
  declarations: [FormComponent, InputTextComponent, TextAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
