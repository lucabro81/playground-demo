import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ParagraphComponent } from '../../atoms/paragraph/paragraph.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { BtnEmptyBorderModule } from '../../atoms/btn-empty-border/btn-empty-border.module';

@NgModule({
  declarations: [ContentComponent, ParagraphComponent, TitleComponent],
  imports: [
    CommonModule,
    BtnEmptyBorderModule
  ],
  exports: [ContentComponent]
})
export class ContentModule {
}
