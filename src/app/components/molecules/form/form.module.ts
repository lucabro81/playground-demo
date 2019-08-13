import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { TextAreaComponent } from '../../atoms/text-area/text-area.component';
import { BtnFullComponent } from '../../atoms/btn-full/btn-full.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../../atoms/loader/loader.module';
import { BtnFullModule } from '../../atoms/btn-full/btn-full.module';

@NgModule({
  declarations: [FormComponent, InputTextComponent, TextAreaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule,
    BtnFullModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
