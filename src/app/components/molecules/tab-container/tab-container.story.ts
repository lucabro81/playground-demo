import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TabContainerModule } from './tab-container.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const template = `
<div class="container">
  <div class="wrapper">
    <plg-tab-container></plg-tab-container>
  </div>
</div>`;

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        HttpClientModule,
        TabContainerModule,
      ]
    })
  )
  .add('Tab container', () => ({
    template: template,
    styles: [
      '.container { display: grid; grid-template-columns: repeat(11, 1fr 30px) 1fr; }',
      '.wrapper { grid-column: span 8; }',
    ]
  }));
