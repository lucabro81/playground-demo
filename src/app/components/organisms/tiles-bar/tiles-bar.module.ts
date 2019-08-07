import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from "../../molecules/tile/tile.component";
import { TilesBarComponent } from "./tiles-bar.component";

@NgModule({
  declarations: [TilesBarComponent, TileComponent],
  imports: [
    CommonModule
  ],
  exports: [TilesBarComponent],
})
export class TilesBarModule { }
