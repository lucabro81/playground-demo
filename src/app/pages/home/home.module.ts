import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from '../../components/organisms/header/header.component';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/organisms/header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
