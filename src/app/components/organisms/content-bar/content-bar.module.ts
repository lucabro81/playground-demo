import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBarComponent } from './content-bar.component';
import { ContentComponent } from '../../molecules/content/content.component';

@NgModule({
  declarations: [ContentBarComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentBarComponent]
})
export class ContentBarModule { }
