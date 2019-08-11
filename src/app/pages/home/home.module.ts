import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from '../../components/organisms/header/header.component';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/organisms/header/header.component';
import { TilesBarModule } from '../../components/organisms/tiles-bar/tiles-bar.module';
import { ContentBarModule } from '../../components/organisms/content-bar/content-bar.module';
import { HeaderModule } from '../../components/organisms/header/header.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TilesBarModule,
    ContentBarModule,
    HeaderModule,
  ]
})
export class HomeModule { }
