import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ContentModule } from './content.module';
import { ContentComponent } from './content.component';

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ContentModule,
      ]
    })
  )
  .add('Content', () => ({
    component: ContentComponent,
    template: '<plg-content cta = "the players >" theme = "dark">' +
      '<div class="title">we<br/>are.</div>' +
      '<div class="paragraph">Consectetur adipiscing elit.<br/>Nulla condimentum tortor sem.</div>' +
    '</plg-content>',
  }));
