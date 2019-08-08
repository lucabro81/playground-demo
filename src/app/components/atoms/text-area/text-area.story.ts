import { storiesOf } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';

storiesOf('ATOMS', module)
  .add('Text area', () => ({
    component: TextAreaComponent,
    props: {
      placeholder: 'placeholder',
      theme: 'light'
    }
  }));
