import { storiesOf } from '@storybook/angular';
import { HeaderComponent } from './header.component';

storiesOf('ORGANISMS', module)
  .add('Header', () => ({
    component: HeaderComponent,
    props: {},
  }));
