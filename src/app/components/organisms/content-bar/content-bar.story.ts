import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ContentModule } from '../../molecules/content/content.module';
import { ContentBarComponent } from './content-bar.component';
import { ContentBarModule } from './content-bar.module';

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ContentBarModule,
        ContentModule,
      ]
    })
  )
  .add('Content bar dark', () => ({
    component: ContentBarComponent,
    template: `
      <plg-content-bar [theme] = "'dark'" [img]="'banner-we-are'" [cta]="'the players'">
        <div class="title">we<br/>are.</div>
        <div class="paragraph">Consectetur adipiscing elit.<br/>Nulla condimentum tortor sem.</div>
      </plg-content-bar>
    `,
  }))
  .add('Content bar light', () => ({
    component: ContentBarComponent,
    template: `
      <plg-content-bar [theme] = "'light'" [img]="'banner-we-are'" [cta]="'the players'" [reverse]="true">
        <div class="title">we<br/>are.</div>
        <div class="paragraph">Consectetur adipiscing elit.<br/>Nulla condimentum tortor sem.</div>
      </plg-content-bar>
    `,
  }));
