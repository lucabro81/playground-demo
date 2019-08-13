import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/organisms/footer/footer.module';
import { MenuModule } from './components/molecules/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { DarkenMenuDirective } from './directives/darken-menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    DarkenMenuDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FooterModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
