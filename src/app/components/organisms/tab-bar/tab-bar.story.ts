import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TabBarComponent } from './tab-bar.component';
import { LoaderModule } from '../../atoms/loader/loader.module';
import { TabContainerModule } from '../../molecules/tab-container/tab-container.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//FIXME: bug https://github.com/storybookjs/storybook/issues/7157 si aspetta la 5.2.0 stabile

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        HttpClientModule,

        TabContainerModule,
        LoaderModule
      ]
    })
  )
  .add('Tiles bar', () => ({
    component: TabBarComponent,
  }));
