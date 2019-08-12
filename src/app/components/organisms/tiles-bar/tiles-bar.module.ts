import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesBarComponent } from './tiles-bar.component';
import { TileModule } from '../../molecules/tile/tile.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TilesBarComponent],
  imports: [
    CommonModule,
    TileModule,
  ],
  exports: [TilesBarComponent],
})
export class TilesBarModule { }
