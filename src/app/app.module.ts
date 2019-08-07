import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { BtnEmptyMenuComponent } from './components/atoms/btn-empty-menu/btn-empty-menu.component';
import { BtnEmptyBorderComponent } from './components/atoms/btn-empty-border/btn-empty-border.component';
import { BtnFullComponent } from './components/atoms/btn-full/btn-full.component';
import { TabComponent } from './components/atoms/tab/tab.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { TextAreaComponent } from './components/atoms/text-area/text-area.component';
import { TextComponent } from './components/atoms/text/text.component';
import { TileComponent } from './components/molecules/tile/tile.component';
import { ContentComponent } from './components/molecules/content/content.component';
import { TabContainerComponent } from './components/molecules/tab-container/tab-container.component';
import { FormComponent } from './components/molecules/form/form.component';
import { TilesBarComponent } from './components/organisms/tiles-bar/tiles-bar.component';
import { ContentBarComponent } from './components/organisms/content-bar/content-bar.component';
import { TabBarComponent } from './components/organisms/tab-bar/tab-bar.component';
// import { HomeModule } from "./pages/home/home.module";
// import { HomeModule } from "./pages/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BtnEmptyMenuComponent,
    BtnEmptyBorderComponent,
    BtnFullComponent,
    TabComponent,
    InputTextComponent,
    TextAreaComponent,
    TextComponent,
    TileComponent,
    ContentComponent,
    TabContainerComponent,
    FormComponent,
    TilesBarComponent,
    ContentBarComponent,
    TabBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
