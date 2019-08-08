import { storiesOf } from '@storybook/angular';
import { BtnEmptyMenuComponent } from './btn-empty-menu.component';

storiesOf('ATOMS', module)
  .add('Empty menu button', () => ({
    component: BtnEmptyMenuComponent,
    props: {
      text: 'Button',
      theme: 'dark'
    },
  }));
