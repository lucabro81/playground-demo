import { storiesOf } from '@storybook/angular';
import { BtnFullComponent } from './btn-full.component';

storiesOf('ATOMS', module)
  .add('Full button', () => ({
    component: BtnFullComponent,
    props: {
      text: 'Button',
      theme: 'dark'
    }
  }));
