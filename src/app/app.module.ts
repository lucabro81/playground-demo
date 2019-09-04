import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/organisms/footer/footer.module';
import { MenuModule } from './components/molecules/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { CookiesPolicyModule } from './components/molecules/cookies-policy/cookies-policy.module';
import { DarkenMenuDirective } from './directives/darken-menu.directive';
import { MenuMobileModule } from './components/molecules/menu-mobile/menu-mobile.module';

@NgModule({
  declarations: [
    AppComponent, DarkenMenuDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FooterModule,
    MenuMobileModule,
    MenuModule,
    CookiesPolicyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
