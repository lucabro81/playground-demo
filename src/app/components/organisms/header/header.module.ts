import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ContentModule } from '../../molecules/content/content.module';
import { TileModule } from '../../molecules/tile/tile.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ContentModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
