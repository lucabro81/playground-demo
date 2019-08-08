import { storiesOf } from '@storybook/angular';
import { BtnEmptyBorderComponent } from './btn-empty-border.component';

storiesOf('ATOMS', module)
  .add('Empty border button', () => ({
    component: BtnEmptyBorderComponent,
    props: {
      text: 'Button',
      theme: 'dark'
    },
  }));
