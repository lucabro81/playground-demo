import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { TextAreaComponent } from '../../atoms/text-area/text-area.component';
import { BtnFullComponent } from '../../atoms/btn-full/btn-full.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, InputTextComponent, TextAreaComponent, BtnFullComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent]
})
export class FormModule { }
