import { moduleMetadata, storiesOf } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { ContentModule } from '../../molecules/content/content.module';

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ContentModule,
      ]
    })
  )
  .add('Header', () => ({
    component: HeaderComponent,
    props: {},
  }));
