import { storiesOf } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

storiesOf('ATOMS', module)
  .add('Input text', () => ({
    component: InputTextComponent,
    props: {
      placeholder: 'placeholder',
      theme: 'light'
    }
  }));
