import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ParagraphComponent } from '../../atoms/paragraph/paragraph.component';
import { BtnEmptyBorderComponent } from '../../atoms/btn-empty-border/btn-empty-border.component';
import { TitleComponent } from '../../atoms/title/title.component';

@NgModule({
  declarations: [ContentComponent, ParagraphComponent, BtnEmptyBorderComponent, TitleComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule {
}
