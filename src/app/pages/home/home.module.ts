import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TilesBarModule } from '../../components/organisms/tiles-bar/tiles-bar.module';
import { ContentBarModule } from '../../components/organisms/content-bar/content-bar.module';
import { HeaderModule } from '../../components/organisms/header/header.module';
import { TabBarModule } from '../../components/organisms/tab-bar/tab-bar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TilesBarModule,
    ContentBarModule,
    TabBarModule,
    HeaderModule,
  ]
})
export class HomeModule { }
