import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FormModule } from '../../molecules/form/form.module';
import { ContentModule } from '../../molecules/content/content.module';
import { MenuFooterModule } from '../../molecules/menu-footer/menu-footer.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FormModule,
    ContentModule,
    MenuFooterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
