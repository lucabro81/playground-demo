import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBarComponent } from './content-bar.component';
import { ContentModule } from '../../molecules/content/content.module';

@NgModule({
  declarations: [ContentBarComponent],
  imports: [
    CommonModule,
    ContentModule
  ],
  exports: [ContentBarComponent]
})
export class ContentBarModule { }
